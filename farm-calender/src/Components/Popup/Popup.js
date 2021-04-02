import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const PopupWindow = ({info,handlePopup,removeEvent}) => {
  return (
    <div className="container">
      <button type="button" onClick={handlePopup}>
        Back
      </button>
      <div className=""> 
      {/* {info.event._def.title} */}
      <form action="" method="get">
      <div className="form-popup">
        <div className="">
        <label for="full-name" className="label">Full name:</label>
        <input
          type="text"
          id="full-name"
          placeholder="enter your full name"
          className="full-name"
          required
        />
        </div>
        <div className="">
        <label for="email" className="label">Email address:</label>
        <input
          type="email"
          id="email"
          placeholder="enter your email"
          className="email"
          required
        />
        </div>
        <button type="submit">
          submit
        </button>
        </div> 
        </form>
        </div>
    </div>
  );
};

export default PopupWindow;
