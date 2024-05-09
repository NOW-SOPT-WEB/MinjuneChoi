import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Homepage";
import LoginPage from "./login";
import SignUpPage from "./Signuppage";
import Page from "./page";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home/:memberId" element={<HomePage />} />
        <Route path="/" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/page/:memberId" element={<Page />} />
      </Routes>
    </Router>
  );
};

export default App;
