import { useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const SearchPage = (props) => {
  const [searchValue, setSearchValue] = useState("");
  const [searchBooks, setSearchBooks] = useState([]);
  const handleChange = (event) => {
    setSearchValue(event.target.value);
    const getSearchBooks = async () => {
      if (event.target.value !== "") {
        const res = await props.search(event.target.value);
        if (res.error === "empty query") setSearchBooks([]);
        else setSearchBooks(res);
        console.log(res);
      }
    };

    getSearchBooks();
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {searchValue !== ""
            ? searchBooks.length !== 0
              ? searchBooks.map((book) => {
                  return (
                    <li key={book.industryIdentifiers[0].identifier}>
                      <Book
                        width={128}
                        height={193}
                        backgroundImage={book.imageLinks.thumbnail}
                        bookAuthor={book.authors}
                        bookTitle={book.title}
                        book={book}
                      />
                    </li>
                  );
                })
              : "No Results Found"
            : "Enter a Search keyword"}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
