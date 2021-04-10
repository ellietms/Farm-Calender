import React from "react";
import Moment from 'react-moment';
import "bootstrap/dist/css/bootstrap.css";
import "./BookingTime.css";

const BookingTime = ({info}) => {
    return (
        <div className="booking-info">
               <p>Booking for {info.event.title} <Moment format="D MMM YYYY" withTitle>{info.event.start}</Moment></p>
               <p>{info.event.title === "Morning" ? "Opening Time" : "Closing Time"}:<Moment format="HH:mm">{info.event.start}</Moment> {info.event.title === "Morning" ? "am" : "pm"}</p>
               <p>Date:<Moment format="DD/MM/YYYY" >{info.event.start}</Moment></p>
        </div>
    )
}

export default BookingTime;