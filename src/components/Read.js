import Book from "./Book";
const Read = (props) => {
  return props.allBooks.map((book) => {
    return (
      book.shelf === "read" && (
        <li key={book.industryIdentifiers[0].identifier}>
          <Book
            width={128}
            height={193}
            backgroundImage={book.imageLinks.thumbnail}
            bookAuthor={book.authors}
            bookTitle={book.title}
            book={book}
            shelf="read"
            allBooks={props.allBooks}
            loadPage={props.loadPage}
            setAllBooks={props.setAllBooks}
            setLoadPage={props.setLoadPage}
          />
        </li>
      )
    );
  });
};
export default Read;
