import { useState, useEffect } from "react";
import { fetchBooks } from "../Api";

const Books = () => {
    const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const {books} = await fetchBooks();
        setBooks(books);
    }
    fetchData();
  }, [])

  console.log(books);
  return (
    <div>
    <h1>Books</h1>
    <p> Welcome to our online Library! </p>
    <p> Take a look at our books: </p>
    <ul>
        {books.map(book => (
          <li className="bookCard" key={book.id}>
            <h3>{book.title}</h3>
            <img src={book.coverimage} alt={book.title} />
            <p>By: {book.author}</p>
            <p>Description: {book.description}</p>
          </li>
        ))}
    </ul>
    </div> 
  )
}
export default Books;