import React , {useEffect} from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Popup from "../Popup/Popup";
import "./CalenderPage.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalenderPage = () => {
  const handleEvent = (info) => {
    info.jsEvent.preventDefault();
     if(info.event.title === "Morning") {
        // <Popup/>
        alert("Morning");
    }
    else{
      alert("Evening")
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
