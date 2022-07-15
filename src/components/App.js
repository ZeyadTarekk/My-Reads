import "../css/App.css";
import * as BooksAPI from "../utils/BooksAPI";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
function App() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
      console.log("all books", res);
    };

    getAllBooks();
  }, []);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage allBooks={allBooks} />} />
        <Route
          path="/search"
          element={<SearchPage search={BooksAPI.search} allBooks={allBooks} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
