import React from "react";
import './homepage.css'; // contains your parallax and background styles
import { Navigate } from 'react-router-dom';
import { HomepageHeader } from "../header/header";
import Login from "../login/login";
import Auth from '../../../services/Auth';
import logoImg from './main.jpg'; // this is passed to header

function Homepage() {
  console.log("On home page");

  const token = Auth.retriveToken();
  const isLoggedIn = token && token !== 'undefined';

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="parallax">
      <HomepageHeader title="Exam Portal" img={logoImg} />
      <Login />
    </div>
  );
}

export default Homepage;
