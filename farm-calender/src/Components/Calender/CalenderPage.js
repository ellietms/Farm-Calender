import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Info from "../Info/Info";
import "./CalenderPage.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction"; 

const CalenderPage = () => {
  let mainPage;
  const [showInfo, setShowInfo] = useState("mainPage");
  const [info, setInfo] = useState("");
  const handleEvent = (info) => {
    setShowInfo("Info");
    setInfo(info);
     console.log("DATE");
    console.log("NEW INFO",info);
    info.jsEvent.preventDefault();
  };
  const handleBackButton = () => {
    setShowInfo("mainPage");
  };
  const removeEvent = (info) => {
    console.log("REMOVED Working!");
    info.jsEvent.preventDefault();
    info.event._def.defId.remove();
    setInfo("");
    console.log("Changed!")
  };
  if (showInfo === "Info") {
    mainPage = (
      <Info
        info={info}
        removeEvent={removeEvent}
        handleBackButton={handleBackButton}
      />
    );
  } else if (showInfo === "mainPage") {
    mainPage = (
      <div className="container">
        <Header />
        <div className="calender">
          <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            selectable='true'
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
  } else {
    <div>
      <p> HI </p>
    </div>;
  }
  return <div>{mainPage}</div>;
};

export default CalenderPage;
