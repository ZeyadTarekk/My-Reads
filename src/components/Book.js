import * as BooksAPI from "../utils/BooksAPI";

const Book = (props) => {
  const handleChange = (event) => {
    const updateBooks = async () => {
      const res = await BooksAPI.update(props.book, event.target.value);

      props.setLoadPage(!props.loadPage);
    };

    updateBooks();
  };
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: props.width,
            height: props.height,
            backgroundImage: `url(${props.backgroundImage})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select defaultValue={props.shelf} onChange={handleChange}>
            <option value="none" disabled>
              {props.shelf === "none" ? "Add to.." : "Move to..."}
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            {props.shelf !== "none" ? <option value="none">None</option> : null}
          </select>
        </div>
      </div>
      <div className="book-title">{props.bookTitle}</div>
      <div className="book-authors">
        {props.bookAuthor && props.bookAuthor.join(", ")}
      </div>
    </div>
  );
};
export default Book;
