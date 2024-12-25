import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Provider from '../components/Provider';
import UserInfo from "../components/UserInfo";
import Library from "../components/Library"
// can touch, but be careful
export default (
  <Provider>
    <Router>
      <Routes>
        <Route path="/" element={<Library />} />
        <Route path="/library" element={<Library />} />
        <Route path="/sign_in" element={<UserInfo />} />
      </Routes>
    </Router>
  </Provider>
)
