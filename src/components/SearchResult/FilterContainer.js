import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import { Slider, IconButton, MenuItem, Typography, Menu, Button } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FilterContainer = ({ filters, priceRange }) => {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [value, setValue] = React.useState([priceRange.min, priceRange.max]);

    //handling filter active state
    const [activeFilter, setActiveFilter] = React.useState("price")

    const filtersMenuList = [
        { name: "Price", helperText: "Low to high", code: "price" },
        { name: "Departure", helperText: "Low to high", code: "dep" },
        { name: "Arrivel", helperText: "Low to high", code: "arrival" },
        { name: "Duration", helperText: "Low to high", code: "duration" },
    ]

    //handling filter range slider

    function valuetext(value) {
        return value;
    }
    //handling price range filter
    const handleChange = (event, newValue) => {
        setValue(newValue);
        filters.handleRangeFilter(newValue);
        console.log(newValue);
    };

    // handling filters dropdown 

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    useEffect(() => {

    }, [])

    //calling the sorting function based on item clicked

    const handleSorting = (type) => {
        setAnchorElUser(null);
        setActiveFilter(type)
        if (type === "price") {
            filters.handlePriceFilter();

        }
        if (type === "dep") {
            filters.handleDepartureFilter();
        }
        if (type === "arrival") {
            filters.handleArrivalFilter();
        }
        if (type === "duration") {
            filters.handleDurationFilter();
        }
    };

    return (
        <Box
            width="70%"
            height="2.5rem"
            m=" 0 0 1rem 0"
            borderRadius="5px"
            p=" 0 1rem"
            sx={{
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                gap: '1rem'
            }}
        >
            <Box
            >
                <Box sx={{

                    flexGrow: 0,
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                    padding: "8px 14px 8px 16px",
                    borderRadius: "18px",
                }}>

                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                        <Typography>Sort</Typography>
                        <ExpandMoreIcon />
                    </IconButton>

                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {/* Mapping through filter type */}
                        {filtersMenuList.map((listItem) => {
                            return <MenuItem className={listItem.code === activeFilter ? '_active' : ""} onClick={() => handleSorting(listItem.code)}>
                                <Typography textAlign="center">{listItem.name}<span className='helpertext'>{listItem.helperText}</span></Typography>
                            </MenuItem>
                        })}


                    </Menu>
                </Box>
            </Box>
            <Box>
                <Box sx={{
                    flexGrow: 0,
                    boxShadow: "rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset",
                    padding: "8px 14px 8px 16px",
                    borderRadius: "18px",
                }}>

                    <IconButton onClick={handleOpenNavMenu} sx={{ p: 0 }}>
                        <Typography>Price</Typography>
                        <ExpandMoreIcon />
                    </IconButton>

                    <Menu
                        sx={{ mt: '45px' }}
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                    >

                        <Box p="1rem .5rem" display="flex" alignItems="center" sx={{ width: 300, height: 70 }}>
                            <Typography sx={{ mr: "15px" }}>{priceRange.min}</Typography>
                            <Slider
                                getAriaLabel={() => 'Price range'}
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                getAriaValueText={valuetext}
                                min={priceRange.min}
                                max={priceRange.max}

                            />
                            <Typography sx={{ ml: "15px" }}>{priceRange.max}</Typography>
                        </Box>

                        <Button onClick={filters.clearFilter} textAlign="center">Clear Filter</Button>

                    </Menu>
                </Box>
            </Box>
        </Box>
    )
}

export default FilterContainer