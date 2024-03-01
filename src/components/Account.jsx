import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../Api";

const Account = ({ token }) => {
    const [me, setMe] = useState([]);
    const [reservations, setReservations]= useState([]);

    const navigate = useNavigate();
    
    useEffect(() => {
     if (!token) {
        return navigate('/login');
    }
    // fetch request for the user details 
    fetch(`${API_URL}/users/me`, {
        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      }).then(response => response.json())
        .then(result => {
          setMe(result);
        });
}, [token, navigate])

    useEffect(() => {
        // fetch request for the reservation details
        fetch(`${API_URL}/reservations`, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${localStorage.getItem('token')}`
            },
          }).then(response => response.json())
            .then(result => {
              setReservations(result.reservation);
            })
            .catch(console.error);
    }, [])

    const handleDelete = (reservation ) => {
        // fetch request to delete reservation
        fetch(`${API_URL}/reservations/${reservation.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${localStorage.getItem('token')}`
              },
          }).then(response => response.json())
            .then(result => {
              alert('You successfully returned the book: ' + reservation.title );
              return(result.deletedReservation);
            })
            .catch(console.error);
    }

    return (
    <>
    <h2>Account </h2>
    <h2>Welcome {me.firstname} {me.lastname}!</h2>
    <h3> Email: {me.email}</h3>
    <ul>
    {reservations.map(reservation => (
          <li className="bookCard" key={reservation.id}>
            <h3>{reservation.title}</h3>
            <img src={reservation.coverimage} alt={reservation.title} />
            <p>By: {reservation.author}</p>
            <p>Description: {reservation.description}</p>
            <p>Id: {reservation.id}</p>
            <button onClick={ () =>handleDelete(reservation)}>Return Book</button>
          </li>
        ))}
    </ul>
    </>
    )
}
export default Account;
