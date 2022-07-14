import Book from "./Book";
import { Link } from "react-router-dom";
const HomePage = (props) => {
  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Currently Reading</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                  {props.currentlyReading.map((book) => {
                    return (
                      <li key={book.industryIdentifiers[0].identifier}>
                        <Book
                          width={128}
                          height={193}
                          backgroundImage={book.imageLinks.thumbnail}
                          bookAuthor={book.authors}
                          bookTitle={book.title}
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Want to Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {props.wantToRead.map((book) => {
                    return (
                      <li key={book.industryIdentifiers[0].identifier}>
                        <Book
                          width={128}
                          height={193}
                          backgroundImage={book.imageLinks.thumbnail}
                          bookAuthor={book.authors}
                          bookTitle={book.title}
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">Read</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {props.read.map((book) => {
                    return (
                      <li key={book.industryIdentifiers[0].identifier}>
                        <Book
                          width={128}
                          height={193}
                          backgroundImage={book.imageLinks.thumbnail}
                          bookAuthor={book.authors}
                          bookTitle={book.title}
                        />
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
      )
    </div>
  );
};

export default HomePage;
