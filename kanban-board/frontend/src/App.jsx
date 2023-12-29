import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from "./views/Login";
import SignUp from "./views/SignUp";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
            path="/" 
            element={<Login />}  
        />
        <Route 
          path="/signup" 
          element={<SignUp />}  
        />
      </Routes>
  </BrowserRouter>
  )
}

export default App;