import './App.css'
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './views/Home';
import IssueDoc from './views/IssueDoc';
const App:React.FC=()=> {
  return (
    <Router>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
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
