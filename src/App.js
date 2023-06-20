import "./styles.css";
import React from "react";
// import * as js from "./assets/js/homepage/homepage"
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.js";
import EspaceEntreprise from "./pages/EspaceEntreprise.js";
import EspaceMilo from "./pages/EspaceMilo.js";
import EspaceJeune from "./pages/EspaceJeune.js";
import Crud from "./pages/Crud";
import { BrowserRouter, Router, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";



export default function App() {


  // useEffect(() => {
  //   appearAll();

  // })


  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path='/EspaceEntreprise' element= {<EspaceEntreprise/>} />
        <Route path='/EspaceMilo' element= {<EspaceMilo/>} />
        <Route path='/EspaceJeune' element= {<EspaceJeune/>} />
        <Route path='/Crud' element= {<Crud/>} />



        <Route path='/' element= {<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}
