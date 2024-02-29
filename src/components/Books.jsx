import { useState, useEffect } from "react";
import { fetchBooks } from "../Api";
import { useNavigate } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [filterText, setFilterText] = useState("");
    //const filteredBooks = books.filter(book => book.name.toLowerCase().includes(filterText.toLowerCase()));

  useEffect(() => {
    async function fetchData() {
        const {books} = await fetchBooks();
        //if ({books} = success) {
        setBooks(books);
        console.log(books);
        //} else {
        //  setError(books.error.message)
        // }
    }
    fetchData();
  }, [])
  
  const navigate = useNavigate(); 

  const booksToDisplay = filterText
    ? books.filter((book) =>
        book.name.toLowerCase().includes(searchParam.toLowerCase()),
        console.log(books)
      )
    : books;

  return (
    <div>
    <p> Take a look at our books: </p>
    <label className="searchInput">
    <input 
      type="text" placeholder="Search a Book?" 
      onChange={(e) => setFilterText(e.target.value.toLowerCase())}
    />
    </label>
    {error && <p>{error}</p>}
    <div className="booksList">
      {booksToDisplay.length > 0
        ? books.map((book) => {
          return(
            <div className="bookCard" key={book.id}>
              <h3>{book.title}</h3>
              <img src={book.coverimage} alt={book.title} />
              <p>By: {book.author}</p>
              <button onClick={ () => navigate(`books/${book.id}`) }> Book Details </button>
            </div> 
          );
        })
        : "No books match search term."} 
      </div>
    </div> 
  );
}
export default Books;