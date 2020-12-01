import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import React, { useEffect } from "react";

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    // Initialize Materialize
    M.AutoInit();
  });

  return (
    <div className='App'>
      <SearchBar />
      <div className='container'>
        <Logs />
      </div>
    </div>
  );
}

export default App;
