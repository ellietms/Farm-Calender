import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";

const Header = () => {
  return (
      <nav className="navbar container headerContainer">
          <div className="row">
          <img
            src="http://oasisfarmwaterloo.org/wp-content/uploads/2016/06/Website-Logo-Header2-e1465860590865.png"
            className="d-inline-block align-top"
            alt="oasis farm brand image"
          />
          </div>
      </nav>
  );
};

export default Header;
