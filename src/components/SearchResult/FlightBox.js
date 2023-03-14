import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './searchResult.css'

export const FlightBox = (props) => {

  const [flightTime, setFlightTime] = useState('')

  useEffect(() => {
    // time to second
    let hour = Math.floor(props.ft / (60 * 60))
    let r = props.ft % (60 * 60)
    setFlightTime(hour + ":" + r / 60)

  }, [props])

  return (
    <div className='flightBox'>
      <div className='flight-vendor'>
        <img className='vendor-image' alt='flight Vendor' src={`https://cdn.aertrip.com/resources/assets/scss/skin/img/airline-master/${props.vendor}.png`} />

        <Typography>IndiGo</Typography>
      </div>
      <div className='flight-duration'>
        <div className='from'>
          <Typography>{props.dt}</Typography>
          <Typography>{props.fr}</Typography>
        </div>
        <div className='duration'>
          <Typography>{flightTime}h</Typography >
          <hr className='duration-connector' />
        </div>
        <div className='to'>
          <Typography>{props.at}</Typography>
          <Typography>{props.to}</Typography>
        </div>
      </div>
      <div className='flight-cost'>
        <Typography color="#0066cc">&#8377;&nbsp;{props.fare}</Typography>
      </div>
    </div>
  )
}
