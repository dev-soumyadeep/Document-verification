import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import RegisterPage from './views/RegisterPage';
import IssueDoc from './views/issuer/IssueDoc';
import LoginPage from './views/Login';
const App:React.FC=()=> {
  return (
    <Router>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        />
        <Route
        path='/register'
        element={<RegisterPage/>}
        />
        <Route
        path='/login'
        element={<LoginPage/>}
        />
        <Route
        path='/issue-doc'
        element={<IssueDoc/>}
        />
      </Routes>
    </Router>
  )
}

export default App
