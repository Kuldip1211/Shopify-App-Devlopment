import React, { useEffect, useState } from "react";
import "./TopBar.css";
import shopifyLogo from "../assets/shopify_glyph.png";
import {useAuthenticatedFetch } from "../hooks"
export function TopBar() {

  let [storename , setStorename] = useState("");

  useEffect(async()=>{
    try{
      let request = await fetch("/api/store/info", {
        method : "GET",
        headers : { "Content-Type" : "application/json" }
      })
      let response = await request.json();
      setStorename(response.data[0].name);
    }catch(e){
      alert("Error " + e)
    }
  },[])

  return (
    <header className="topbar">
      <div className="logo-section">
        {/* Shopify logo */}
        <img
          src={shopifyLogo}
          alt="Shopify Logo"
          className="logo"
        />
        <span className="title">{storename} Dashboard</span>
      </div>
    </header>
  );
}
