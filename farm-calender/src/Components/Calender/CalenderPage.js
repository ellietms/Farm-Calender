import React, {useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import "./CalenderPage.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalenderPage = () => {
  let mainPage;
  const [showPopup, setShowPopup] = useState("mainPage");
  const [info,setInfo] = useState("");
  const handlePopup = (info) => {
    info.event._def.defId.remove();
    console.log("REMOVED")
    setShowPopup("mainPage");
    // console.log("REMOVED");
  }
  const handleEvent = (info) => {
    setShowPopup("Popup");
    setInfo(info);
    info.jsEvent.preventDefault();
  };
   const removeEvent = (info) => {
    info.event._def.defId.remove();
    info.jsEvent.preventDefault();
    console.log("REMOVED")
  }
  if (showPopup === "Popup") {
    mainPage = 
    <Popup 
    handlePopup={handlePopup}
    info={info}
    />
  } 
  else {
    mainPage = (
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
            eventClick={handleEvent}
          />
        </div>
        <Footer />
      </div>
    );
  }
  return (
     <div>
    { mainPage}
    </div>
  );
};

export default CalenderPage;
