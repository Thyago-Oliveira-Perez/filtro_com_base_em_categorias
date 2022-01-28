import React, { useEffect, useState } from "react";
import "./index.css";
import Vaga from "./components/Vaga";

export default function App(){

  return (
    <div className="App">
      <div className="list">
        <Vaga/>
      </div>
    </div>
  );
};