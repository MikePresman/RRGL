import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../components/library";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Library />} />
    </Routes>
  </Router>
);