const divBookShelf = document.querySelector(".grid-container--main");
const addBookButton = document.querySelector("#addbook-button");
const myLibrary = [];

addBookButton.addEventListener('click', () => {

  const divNewBook = document.createElement("div");
  divNewBook.classList.add("grid-container--main-book");

  // Get values from HTML document
  const authorBook = document.querySelector("#author").value;
  const articleBook = document.querySelector("#article").value;
  const pagesBook = document.querySelector("#pages").value;
  // const isReaded = document.querySelector("#isReaded").value;

  // Creating <p> elements
  const pAuthor = document.createElement("p");
  const pArticle = document.createElement("p")
  const pPages = document.createElement("p");
  // const pIsReaded = document.createElement("p");

  // Adding classes to <p> elements
  pAuthor.classList.add("grid-container--main--book--booktext");
  pArticle.classList.add("grid-container--main--book--booktext");
  pPages.classList.add("grid-container--main--book--booktext");
  // pIsReaded.classList.add("grid-container--main--book--booktext");

  // Adding text to <p> elements
  pAuthor.textContent = authorBook;
  pArticle.textContent = articleBook;
  pPages.textContent = pagesBook;
  // pIsReaded.textContent = isReaded;

  // Creating delete button
  const bookDeleteButton = document.createElement("button");
  bookDeleteButton.textContent = "Delete this book";
  bookDeleteButton.classList.add("delete-button");

  // Event listener to delete button (when button is pressed - delete book)
  bookDeleteButton.addEventListener('click', () => {
    const parent = bookDeleteButton.parentNode;
    parent.remove();
  })



  // Adding <p> to <div>
  divNewBook.append(pAuthor, pArticle, pPages /* pIsReaded */);
  divNewBook.append(bookDeleteButton);
  divBookShelf.append(divNewBook);


  // Add book to array
  newBook = new Book(authorBook, articleBook, pagesBook, isReaded);
  myLibrary.push(newBook);
  divNewBook.classList.add("grid-container--main-book");



  console.log(authorBook, articleBook, pagesBook, isReaded);
})


function Book(article, author, pages, /* isReaded */) {
  // the constructor...
  this.article = article;
  this.author = author;
  this.pages = pages;
  // this.isReaded = isReaded;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}


