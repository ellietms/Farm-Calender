import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="footer-container">
          <div className="column">
            <span>Oasis Farm Waterloo is a project</span>
            <span>
              of{" "}
              <a
                className="Oasis-link"
                href="http://www.oasiswaterloo.org/"
                target="_blank"
                rel="noopener"
              >
                Oasis Hub Waterloo
              </a>{" "}
              and the
            </span>
            <span>Oasis global family © Oasis </span>
            Charitable Trust 2015.
            <br />
            <a href="http://oasiswaterloo.org" target="_blank" rel="noopener">
              <img
                class="alignnone  wp-image-67"
                src="http://oasisfarmwaterloo.org/wp-content/uploads/2016/06/WaterlooHub-300x193.png"
                alt="WaterlooHub"
                width="174"
                height="112"
              />
            </a>
          </div>
          <div className="column">
            <span>Oasis Community Hub: Waterloo</span>
            <span>is a Company Limited by</span>
            <span>Guarantee registered in England</span>
            <span>and Wales number 07237305 and</span>
            <span>a Registered Charity number 1136965.</span>
          </div>
          <div className="column">
          <div className="Oasis-SocialMedia">  
          <a href="http://twitter.com/OasisFarmSE1">
              <img class="alignnone size-full wp-image-69" src="http://oasisfarmwaterloo.org/wp-content/uploads/2016/06/twitter_logo-e1466168243979.png" alt="twitter_logo" width="42" height="43"/>
          </a>
          &nbsp; &nbsp;&nbsp;
          <a href="https://www.facebook.com/OasisFarmWaterloo">
             <img class="alignnone size-full wp-image-68" src="http://oasisfarmwaterloo.org/wp-content/uploads/2016/06/Facebook_logo-e1466168317268.png" alt="Facebook_logo" width="42" height="43"/>
          </a>
          <a href="https://www.instagram.com/oasisfarmwaterloo/">
              <img class="alignnone size-full wp-image-124" src="http://oasisfarmwaterloo.org/wp-content/uploads/2019/01/app-icon2.png" alt="instagram_logo" width="42" height="43" hspace="17"/>
          </a>
          </div>  
          <div className="Oasis-info">
          <strong>Address: </strong>
          <a className="Oasis-link" href="https://goo.gl/maps/sBeSNjxu8uo">18 Carlisle Ln, London SE1 7LG</a>
          </div>
          <div className="Oasis-info">
          <b>Email. </b>
          <a className="Oasis-link" href="mailto:farm@oasiswaterloo.org">farm@oasiswaterloo.org</a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
