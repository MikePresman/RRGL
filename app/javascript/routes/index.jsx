import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Library from "../components/library";
import Provider from '../components/Provider';

// can touch, but be careful
export default (
  <Provider>
    <Router>
      <Routes>
        <Route path="/new" element={<Library />} />
      </Routes>
    </Router>
  </Provider>
)
