const myLib = [];

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    if (Object.getPrototypeOf(book) === Book.prototype) {
        myLib.push(book);
    }
}
const enchanted = new Book("Enchanted", "Ariva Derice", "Read");
addBookToLibrary(enchanted);

const yuna = new Book("Yuna, Dark City", "Anonymous", "Unread");
addBookToLibrary(yuna);

const library = document.querySelector(".library");

const newBookBtn = document.querySelector("#newBook");

const addBookDialog = document.querySelector("#addBook");

const closeBookDialog = document.querySelector("#closeBook");

window.onload = function() {
    addBookDialog.close();
};

newBookBtn.addEventListener("click", () => {
    addBookDialog.showModal();
});

closeBookDialog.addEventListener("click", () => {
    addBookDialog.close();
});

myLib.forEach((element, index, array) => {
    var newBook = document.createElement("div");
    newBook.setAttribute("class", "book");
    var title = document.createElement("h3");
    title.setAttribute("id", element.title);
    var titleNode = document.createTextNode(`${element.title}`);
    title.appendChild(titleNode);
    var author = document.createElement("p");
    author.setAttribute("id", element.author);
    var authorNode = document.createTextNode(`${element.author}`);
    author.appendChild(authorNode);
    var isRead = document.createElement("p");
    isRead.setAttribute("id", element.isRead);
    var isReadNode = document.createTextNode(`${element.isRead}`);
    isRead.appendChild(isReadNode);
    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(isRead);
    library.appendChild(newBook);
});