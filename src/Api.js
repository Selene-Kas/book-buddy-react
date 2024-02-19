const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export async function fetchBooks() {
    try {
  const response = await fetch(`${API_URL}/books`)
  const data = response.json();
  return data;
} catch (err) {
    console.error('Uh oh, trouble fetching books', err);
}
}

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