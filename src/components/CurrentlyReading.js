import Book from "./Book";
const CurrentlyReading = (props) => {
  return props.allBooks.map((book) => {
    return (
      book.shelf === "currentlyReading" && (
        <li key={book.industryIdentifiers[0].identifier}>
          <Book
            width={128}
            height={193}
            backgroundImage={book.imageLinks.thumbnail}
            bookAuthor={book.authors}
            bookTitle={book.title}
            book={book}
            shelf="currentlyReading"
          />
        </li>
      )
    );
  });
};
export default CurrentlyReading;
