import "./App.css";
import React from "react";

import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import Sidebar from "./components/Sidebar";

import RecommendedVideo from "./components/RecommendedVideo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
        <Router>
        <Header />
        <Routes>
          <Route path="/search/:searchTerm" element={<div className="app__page">
            <Sidebar />
            <SearchPage />
          </div>} />

          <Route path="/" element={<div className="app__page">
            <Sidebar />
            <RecommendedVideo />
          </div>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
