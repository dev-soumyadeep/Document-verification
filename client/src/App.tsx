import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import RegisterPage from "./views/RegisterPage";
import LoginPage from "./views/Login";
import IssueDoc from "./views/issuer/IssueDoc";
import History_issuer from "./views/issuer/History_issuer";
import Documents_holder from "./views/holder/Documents_holder";
import Verify from "./views/verifier/Verify";
import History_verification from "./views/verifier/History_verification";
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/*Issue Document Route */}
        <Route path="/issue-doc" element={<IssueDoc />} />
        <Route path="/issue/history/:id" element={<History_issuer />} />
        {/* Holder Dashboard Route */}
        <Route
          path="/holding/my-documents/:id"
          element={<Documents_holder />}
        />
        {/* Verifier Route */}
        <Route path="/verify" element={<Verify />} />
        <Route
          path="/verification/history/:id"
          element={<History_verification />}
        />
      </Routes>
    </Router>
  );
};

export default App;
