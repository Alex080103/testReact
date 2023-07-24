import "./styles.css";
import React, { useState } from "react";
// import * as js from "./assets/js/homepage/homepage"
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.js";
import EspaceEntreprise from "./pages/EspaceEntreprise.js";
import EspaceMilo from "./pages/EspaceMilo.js";
import EspaceJeune from "./pages/EspaceJeune.js";
import Crud from "./pages/Crud";
import Contact from "./pages/Contact";
import CalendarPageJeune from "./pages/CalendarPageJeune";
import Mentions from "./pages/Mentions.js";
import OneForAll from "./pages/OneForAll.js";

import { BrowserRouter, Router, useLocation } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";
import Protected from "./components/admin/Protected";
import Error404 from "./pages/Error404";
import CalendarPageConseiller from "./pages/CalendarPageConseiller";
import Formulaire from "./pages/Formulaire";
import Catalogue from "./pages/Catalogue";
import Atelier from "./pages/Atelier";

export default function App() {

  const [isConnected, setIsConnected] = useState(false);
  // setIsConnected(false);
  // useEffect(() => {
  //   appearAll();

  // })
  
  return (
    <BrowserRouter>
    <Nav isConnected={isConnected} setIsConnected={setIsConnected}/>
      <Routes>
        <Route path='/EspaceEntreprise' element= {<EspaceEntreprise/>} />
        <Route path='/EspaceMilo' element= {<EspaceMilo/>} />
        <Route path='/EspaceJeune' element= {<EspaceJeune/>} />
        <Route path='/Crud/:team' element= {
          <Protected isConnected={isConnected}>
            <Crud/>
          </Protected>
        }/>
        <Route path="/Atelier/:id" element={<Atelier/>}/>
        <Route path="/Catalogue/:jeunes" element={<Catalogue/>}/>
        <Route path='/CalendarJeune' element={<CalendarPageJeune/>}/>
        <Route path='/CalendarConseiller' element={<CalendarPageConseiller/>}/>
        <Route path='/Formulaire/:addMember' element={<Formulaire/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Mentions' element={<Mentions isConnected={isConnected} setIsConnected={setIsConnected}/>}/>
        <Route path='/OneForAll' element={<OneForAll/>}/>
        <Route path='/Accueil' element= {<Home/>} />
        <Route path='/Error404' element={<Error404/>}/>
        <Route path='*' element={<Home/>}/>

      </Routes>
    <Footer setIsConnected={setIsConnected}/>
    </BrowserRouter>
  );
}
