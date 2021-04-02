import React , {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import "./CalenderPage.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalenderPage = () => {
  const [showPopup,setShowPopup]=useState(false);
  const handlePopup = () => setShowPopup(false);
  const handleEvent = (info) => {
    setShowPopup(true);
    console.log("I am working");
    console.log(showPopup);
    info.jsEvent.preventDefault();
     if(showPopup === true) {
       <Popup 
       handlePopup={handlePopup}
       title={info.event.title}
       />
    }
  }
  return (
    <div className="container">
      <Header />
      <div className="calender">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Morning", startRecur: "09:00", endRecur: "12:59" },
            { title: "Evening", startRecur: "13:00", endRecur: "17:00" },
          ]}
          eventClick = {(info) => handleEvent(info)}
        />
      </div>
      <Popup />
      <Footer />
    </div>
  );
};

export default CalenderPage;
