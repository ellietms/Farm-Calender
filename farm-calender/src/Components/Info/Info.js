import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import Moment from "react-moment";
import "./Info.css";

const Info = ({ info, handleBackButton, removeEvent }) => {
  return (
    <div className="container">
      <Header/>
      <button type="button" onClick={handleBackButton} className="button">
        Back
      </button>
      <div className="booking-details">
        <h3>Booking Details : </h3>
        <p className="table-booking-2">
          Date:{" "}<Moment format="DD/MM/YYYY">{info.event.start}</Moment>
        </p>
        <p className="table-booking-1">Booking for {info.event.title}</p>
        <p>
          {info.event.title === "Morning" ? "Opening Time" : "Closing Time"}:
          <Moment format="HH:mm">{info.event.start}</Moment>{" "}
          {info.event.title === "Morning" ? "am" : "pm"}
        </p>
      </div>
      <div className="form-container">
        <form className="container " onSubmit={removeEvent}>
        <p className="form-date">
          <Moment format="D MMM YYYY" withTitle>
            {info.event.start}
          </Moment>
        </p>
          <div className="form-group">
            <label for="exampleInputPassword1">Name</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your full name"
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email address"
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Info;
