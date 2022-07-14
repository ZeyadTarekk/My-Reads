import "../css/App.css";
import {
  Route,
  Routes,
  useNavigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { useState, useEffect } from "react";
import Books from "./Books";
import SearchPage from "./SearchPage";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Books />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
