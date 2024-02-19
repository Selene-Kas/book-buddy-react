import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchSingleBook } from "../Api";

const SingleBook = () => {
    const { id }= useParams();
    const [book, setBook] = useState( );


  useEffect(()=>{
    async function getBookDetails() {
        const bookDetails = await fetchSingleBook(id);
       setBook(bookDetails)
       //console.log(bookDetails)
    }
    getBookDetails()
  }, [] )

    return (
    <div>
    <h2>Single Book: Id of {id}</h2>
    {book ? (
        <ul className="singleBook"> 
          <li>Title: {book.title}</li>
          <li><img src={book.coverimage} alt={book.title}  /></li>
          <li>Author: {book.author}</li>
          <li>Description: : {book.description}</li>
          <li>ID: {book.id}</li>
          <li>Available: {book.available}</li>
          <button> Return Book </button>
        </ul>
        ): (
          <div>Go back to Books and select Book first.</div>
        )}
    </div>
    )
}
export default SingleBook;