"use client"
import Header from "./components/header/header"
import Footer from "./components/footer/footer"
import Welcome from "./components/main/welcome/welcome"
import We from "./components/main/we/we"
import Services from "./components/main/services/services"
import Contacts from "./components/main/contacts/contacts"

import React from "react";

export default function Home() {

  return (
    <div id="container-wrapper">
        {Header()}
       <main id="main">
         {Welcome()}
         {We()}
         {Services()}
         {Contacts()}
       </main>

       {Footer()}
    </div>
  );
}
