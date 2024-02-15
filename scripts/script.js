const myLibrary = [];

function Book(article, author, pages) {
  // the constructor...
  this.article = article;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

book1 = new Book('Harry Potter', 'J.K Rowling', 300);

