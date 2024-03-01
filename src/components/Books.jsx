import { useState, useEffect } from "react";
import { fetchBooks } from "../Api";
import { useNavigate } from "react-router-dom";

const Books = () => {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null);
    const [filterText, setFilterText] = useState("");
    const filteredBooks = books.filter( book => 
      book.title.toLowerCase().includes(filterText.toLowerCase()) ||
      book.author.toLowerCase().includes(filterText.toLowerCase())
      );

  useEffect(() => {
    async function fetchData() {
        const data = await fetchBooks();
        setBooks(data.books);
        console.log(data.books);
    }
    fetchData();
  }, [])
  
  const navigate = useNavigate(); 

  return (
    <div>
    <p> Take a look at our books: </p>
    <label className="searchInput">
    <input 
      type="text" placeholder="Search a Book?" value={filterText}
      onChange={(e) => setFilterText(e.target.value.toLowerCase())}
    />
    </label>
    {error && <p>{error}</p>}
    <div className="booksList">
      { filteredBooks.map((book) => {
          return(
            <div className="bookCard" key={book.id}>
              <h3>{book.title}</h3>
              <img src={book.coverimage} alt={book.title} />
              <p>By: {book.author}</p>
              <button onClick={ () => navigate(`books/${book.id}`) }> Book Details </button>
            </div> 
          );
        })
       } 
      </div>
    </div> 
  );
}
export default Books;