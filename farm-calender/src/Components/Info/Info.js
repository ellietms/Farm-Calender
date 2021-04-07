import React from "react";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Moment from 'react-moment';
import "./Info.css";

const Info = ({info,handleBackButton, removeEvent }) => {
  return (
    <div className="container">
      <button type="button" onClick={handleBackButton} className="button">
        Back
      </button>
      <div className="container form-container">
      <table className="table-booking">
        <tr>
        <td className="table-booking-1"> 
        Booking for {info.event.title} <Moment format="D MMM YYYY" withTitle>{info.event.start}</Moment>
        </td> 
        </tr>
        <tr className="table-booking-2">
          <td>Date:<Moment format="DD/MM/YYYY" >{info.event.start}</Moment></td>
          <td>{info.event.title === "Morning" ? "Opening Time" : "Closing Time"}:<Moment format="HH:mm">{info.event.start}</Moment> {info.event.title === "Morning" ? "am" : "pm"}</td>
        </tr>
        <tr className="table-booking-3">
          <td>
        <form className="form-container" action="" method="get" onSubmit={removeEvent}>
          <div className="form-input">
            <label for="full-name" className="input-label">
              Name:
            </label>
            <input
              type="text"
              id="full-name"
              placeholder="enter your full name"
              className="input-box"
              required
            />
          </div>
          <div className="form-input">
            <label for="email" className="input-label">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="enter your email"
              className="input-box"
              required
            />
          </div>
          <button type="submit" className="button submit-button">
            submit
          </button>
        </form> 
        </td>
        </tr>
      </table>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Info;
