import Book from "./Book";
const WantToRead = (props) => {
  return props.allBooks.map((book) => {
    return (
      book.shelf === "wantToRead" && (
        <li key={book.industryIdentifiers[0].identifier}>
          <Book
            width={128}
            height={193}
            backgroundImage={book.imageLinks.thumbnail}
            bookAuthor={book.authors}
            bookTitle={book.title}
            book={book}
            shelf="wantToRead"
          />
        </li>
      )
    );
  });
};
export default WantToRead;
