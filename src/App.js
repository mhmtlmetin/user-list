import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import UserList from "./components/UserList/UserList.js";

//redux
import { Provider } from "react-redux";
import { store } from "./redux/Store";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <UserList />
      </div>
    </Provider>
  );
}

export default App;
