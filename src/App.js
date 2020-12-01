import SearchBar from "./components/layout/SearchBar";
import Logs from "./components/logs/Logs";
import AddBtn from './components/layout/AddBtn'
import React, { useEffect } from "react";
import AddLogModal from './components/logs/AddLogModal'
import EditLogModal from './components/logs/EditLogModal'
import { Provider } from 'react-redux'
import store from './store'

import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";

function App() {
  useEffect(() => {
    // Initialize Materialize
    M.AutoInit();
  });

  return (
    <Provider store={store}>
    <div className='App'>
      <SearchBar />
      <div className='container'>
        <AddBtn/>
        <AddLogModal/>
        <EditLogModal/>
        <Logs />
      </div>
    </div>
    </Provider>
  );
}

export default App;
