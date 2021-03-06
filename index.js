let books = [];

const fetchBooks = () => {
  return fetch('./books.json')
    .then(response => {
      return response.json();
    })
    .then(data => {
      books = data?.books;

      const bookList = document.getElementById('bookList');
      bookList.innerHTML = '';

      books.map(book => {
        bookList.innerHTML += `<li class="book ${book.status}"><a class="book-title" href="${book.url}">${book.title}</a> by ${book.author}</li>`;
      });
    });
};

fetchBooks().catch(err => {
  console.log("Ouch, can't find or read the file!", err);
});
