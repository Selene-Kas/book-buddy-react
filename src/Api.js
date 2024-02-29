export const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

// fetch for array of all books
export async function fetchBooks() {
  try {
  const response = await fetch(`${API_URL}/books`)
  const result = await response.json();
  return result;
} catch (error) {
    console.error('Uh oh, trouble fetching books', error);
}
}

// fetch for a single book
export const fetchSingleBook = async (bookId) => {
    try {
        const response = await fetch(`${API_URL}/books/${bookId}`);
        const result = await response.json();
       console.log(result.book);
        return result.book;
    } catch (err) {
        console.error(`Oh no, trouble fetching book #${bookId}!`, err);
    }
};
//fetchSingleBook(45);

// fetch for registering a user
export async function fetchRegister(firstname, lastname, email, password) {
    try{
    const response = await fetch(`${API_URL}/users/register`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstname,
            lastname,
            email,
            password
        })
    });
    const data = await response.json();
    return data;
    //console.log(data);
    } catch (err) {
        console.error(err);
    } 
}

//fetch for user login
export async function fetchLogin(email, password) {
    try{
        const response = await fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email,
                password
            })
        });
        const data = await response.json();
        console.log(data);
        return data;
    } catch (err) {
        console.error(err);
    }
}

