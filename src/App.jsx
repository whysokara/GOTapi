import "./App.css";
import { useState } from "react";

function App() {
  const [books, setBooks] = useState(null);
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  function fetchBook() {
    fetch(apiURL)
      .then((resp) => resp.json())
      .then((data) => {
        setBooks(data);
      });
  }

  return (
    <div className="App">
      <h1>Game of Thrones Books</h1>
      <h2>Fetch a list from an API and display it</h2>

      <div>
        <button className="fetch-button" onClick={fetchBook}>
          Fetch Data
        </button>
        <br />
      </div>
      <div className="books">
        {books &&
          books.map((book, index) => {
            const authors = book.authors.join(", ");
            const cleanedDate = new Date(book.released).toDateString();
            return (
              <div className="book" key={index}>
                <h3>{index + 1}</h3>
                <h2>{book.name}</h2>

                <div className="details">
                  <p>👨: {authors}</p>
                  <p>📖: {book.numberOfPages}</p>
                  <p>🏘️: {book.country}</p>
                  <p>⏰: {cleanedDate}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
