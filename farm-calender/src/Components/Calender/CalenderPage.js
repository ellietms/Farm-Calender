import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./CalenderPage.css";
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const CalenderPage = () => {
  return (
    <div className="container">
        <Header />
        <div className="calender">
        <FullCalendar
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        />
        </div>
        <Footer />
      </div>
  );
};

export default CalenderPage;
