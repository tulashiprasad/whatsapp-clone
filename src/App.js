import React, {useState} from "react";
import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import { useStateValue } from "./StateProvider";


function App() {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
        <BrowserRouter>
          <Sidebar />
          <Routes>
            <Route  path="/rooms/:roomId" element={<Chat />} />
            {/* <Route path = '/' element = {<h1> home page </h1>} /> */}
          </Routes>
        </BrowserRouter>
        {/* Chat */}
      </div>   

      )}

    </div>
  );
}

export default App;
