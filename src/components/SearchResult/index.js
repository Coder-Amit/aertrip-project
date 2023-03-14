import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Home from '../Home'
import { Arrival, Departure, Duration, Price, PriceRange } from './filterAction'
import FilterContainer from './FilterContainer'
import { FlightBox } from './FlightBox'

const SearchResult = () => {
    const [flights, setFligts] = useState([])
    const [sorted, setSorted] = useState(true)
    const [priceRange, setPriceRange] = useState(
        { max: 0, min: 0 }
    )

    //setting up the initial render 
    const setData = async (_results) => {
        let data = [];
        let maxPrice = 0
        let minPrice = 0

        _results.data.flights.map((vendor) => {
            vendor.results.j.map((flight) => {
                data.push(flight)
            })
            vendor.results.f.map((data) => {
                if (minPrice === 0 && maxPrice === 0) {
                    minPrice = data.pr.minPrice;
                    maxPrice = data.pr.maxPrice;
                } else {
                    if (data.pr.minPrice < minPrice) {
                        minPrice = data.pr.minPrice;
                    }
                    if (data.pr.maxPrice > maxPrice) {
                        maxPrice = data.pr.maxPrice;
                    }
                }
            })


        })
        let sortedData = Price(data)
        setFligts(sortedData)
        setPriceRange({ ...priceRange, min: minPrice, max: maxPrice })

    }

    // filter methods
    const filters = {
        handlePriceFilter: () => {

            let sortedData = Price(flights)
            setFligts(sortedData)
            setSorted(!sorted)
        },
        handleDepartureFilter: () => {

            let sortedData = Departure(flights)
            setFligts(sortedData)
            setSorted(!sorted)
        },
        handleArrivalFilter: () => {

            let sortedData = Arrival(flights)
            setFligts(sortedData)
            setSorted(!sorted)
        },
        handleDurationFilter: () => {

            let sortedData = Duration(flights)
            setFligts(sortedData)
            setSorted(!sorted)
        },
        handleRangeFilter: function (range) {
            console.log("Inside Price Range");
            let sortedData = PriceRange(flights, range)
            setFligts(sortedData)
            setSorted(!sorted)
        },
        clearFilter: function () {
            setData()
            setSorted(!sorted)
        },

    }


    useEffect(() => {

        //fetching the data from the file

        if (flights.length === 0) {
            fetch('api-data.json'
                , {
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                }
            )
                .then(function (response) {
                    console.log(response)
                    return response.json();
                })
                .then(function (myJson) {
                    console.log(myJson);
                    setData(myJson)
                }).catch((error) => {
                    console.log(error);
                })
        }


    }, [sorted])

    return (<>
        <Home w={100} />
        <FilterContainer filters={filters} priceRange={priceRange} />

        <Box
            display="flex"
            flexDirection="column"
            gap=".5rem"
            alignItems="center"
            sx={{
                width: "100%",

            }}


        >
            {flights.map((flight, index) => {

                return <FlightBox
                    ft={flight.tt[0]}
                    vendor={flight.vendor}
                    fr={flight.ap[0]}
                    to={flight.ap[1]}
                    fare={flight.farepr}
                    at={flight.at}
                    dt={flight.dt}
                    uid={index}
                    key={index}
                />


            })}
        </Box>
    </>
    )
}

export default SearchResult