import "../css/App.css";
import * as BooksAPI from "../utils/BooksAPI";

import {
  Route,
  Routes,
  useNavigate,
  BrowserRouter as Router,
} from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import SearchPage from "./SearchPage";
function App() {
  const [allBooks, setAllBooks] = useState([]);
  useEffect(() => {
    const getAllBooks = async () => {
      const res = await BooksAPI.getAll();
      setAllBooks(res);
    };

    getAllBooks();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <HomePage
              currentlyReading={allBooks}
              wantToRead={allBooks}
              read={allBooks}
            />
          }
        />
        <Route
          path="/search"
          element={
            <SearchPage search={BooksAPI.search} currentlyReading={allBooks} />
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
