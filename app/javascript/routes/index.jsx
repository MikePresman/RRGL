import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../components/library";
import Provider from '../components/Provider';

export default (
  <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
      </Routes>
    </Router>
  </Provider>
)
