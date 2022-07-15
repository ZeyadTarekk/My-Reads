import "../css/App.css";
import * as BooksAPI from "../utils/BooksAPI";

import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [loadPage, setLoadPage] = useState(false);
  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
    };

    getAllBooks();
  }, [loadPage]);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              allBooks={allBooks}
              loadPage={loadPage}
              setAllBooks={setAllBooks}
              setLoadPage={setLoadPage}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage
              search={BooksAPI.search}
              allBooks={allBooks}
              loadPage={loadPage}
              setAllBooks={setAllBooks}
              setLoadPage={setLoadPage}
            />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
