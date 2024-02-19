import { useState, useEffect } from "react";
import { fetchBooks } from "../Api";
import { useNavigate } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);
  useEffect(() => {
    async function fetchData() {
        const {books} = await fetchBooks();
        setBooks(books);
    }
    fetchData();
  }, [])

  const navigate = useNavigate();

  console.log(books);
  return (
    <div>
    <h1>Books</h1>
    <p> Take a look at our books: </p>
    <ul>
        {books.map(book => (
          <li className="bookCard" key={book.id}>
            <h3>{book.title}</h3>
            <img src={book.coverimage} alt={book.title} />
            <p>By: {book.author}</p>
            <p>Description: {book.description}</p>
            <button onClick={ () => navigate(`books/${book.id}`) }> Book Details </button>
          </li>
        ))}
    </ul>
    </div> 
  )
}
export default Books;