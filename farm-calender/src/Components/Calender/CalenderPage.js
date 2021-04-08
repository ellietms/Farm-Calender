import React, {useState} from "react";
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
  const [_id,setId] = useState();
  const [events,setEvents] = useState([
    { title: "Morning",startTime:"06:30", endTime: "09:30", id:{_id},className:"calender-event-morning" , allDay: false},
    { title: "Evening",startTime:"17:00", endTime: "20:00", id:{_id},className:"calender-event-evening" ,allDay: false}
  ]);
  const [info, setInfo] = useState();
  const handleEvent = (info) => {
    setInfo(info);
    setShowInfo("Info");
    if(info.event.title === "Morning"){
      setId("morning");
    }
    else{
      setId("evening");
    }
    info.jsEvent.preventDefault();
    console.log("INFO",info);
    console.log(typeof info.event.end);
  };
  const handleBackButton = () => {
    setShowInfo("mainPage");
  };
  const removeEvent = (info) => {
    setEvents(info.event.id === "");
    // info.jsEvent.preventDefault();
    console.log("REMOVED Working!");
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
  } 
  else if (showInfo === "mainPage") {
    mainPage = (
      <div className="container">
        <Header />
        <div className="calender">
         <FullCalendar
            plugins={[dayGridPlugin, interactionPlugin ]}
            initialView="dayGridMonth"
            selectable='true'
            events={events}
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
