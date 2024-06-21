const myLib = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    if (book.getPrototypeOf() === Book.prototype) {
        myLib.push(book);
    }
}