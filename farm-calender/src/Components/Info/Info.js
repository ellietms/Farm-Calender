import React from "react";
import Footer from "../Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";
import "./Info.css";

const Info = ({ handleBackButton, removeEvent }) => {
  return (
    <div className="container">
      <button type="button" onClick={handleBackButton} className="button">
        Back
      </button>
      <div className="form-container container">
        <form action="" method="get" onSubmit={removeEvent}>
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
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Info;
