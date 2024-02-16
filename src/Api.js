const API_URL = 'https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api';

export async function fetchBooks() {
  const response = await fetch(`${API_URL}/books`)
  const data = response.json();
  return data;
}
