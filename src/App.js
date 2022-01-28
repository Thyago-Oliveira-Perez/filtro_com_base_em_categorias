import React, { useEffect, useState } from "react";
import SearchInput from "./SearchInput";
import "./index.css";
import Vaga from "./components/Vaga";

export default function App(){

  return (
    <div className="App">
      {/* <h1>Animes</h1> */}
      <div className="list">
        <Vaga/>
      </div>
    </div>
  );
};