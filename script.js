const myLib = [];

function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
}

function addBookToLibrary(book) {
    if (Object.getPrototypeOf(book) === Book.prototype) {
        myLib.push(book);
    }
}

const enchanted = new Book("Enchanted", "Ariva Derice", 32);
addBookToLibrary(enchanted);

const yuna = new Book("Yuna, Dark City", "Anonymous", 362);
addBookToLibrary(yuna);

const library = document.querySelector(".library");

myLib.forEach((element, index, array) => {
    var newBook = document.createElement("div");
    newBook.setAttribute("class", "book");
    var title = document.createElement("p");
    title.setAttribute("id", element.title);
    var titleNode = document.createTextNode(`${element.title}`);
    title.appendChild(titleNode);
    var author = document.createElement("p");
    author.setAttribute("id", element.author);
    var authorNode = document.createTextNode(`${element.author}`);
    author.appendChild(authorNode);
    var pages = document.createElement("p");
    pages.setAttribute("id", element.pages);
    var pageNode = document.createTextNode(`${element.pages}`);
    pages.appendChild(pageNode);
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    library.appendChild(newBook);
});