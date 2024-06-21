const myLib = [];

const library = document.querySelector(".library");

const newBookBtn = document.querySelector("#newBook");

const addBookDialog = document.querySelector("#addBook");

const closeBookDialog = document.querySelector("#closeBook");

let bookSubmitForm = document.querySelector("#form");

const submitBtn = document.querySelector("#submit");

const bookTitle = document.querySelector("#title");

const bookAuthor = document.querySelector("#author");

const bookRead = document.querySelector("#read");

window.onload = function() {
    addBookDialog.close();
};

function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    if (Object.getPrototypeOf(book) === Book.prototype) {
        myLib.push(book);
    };
}

function renderLibrary(arr) {

    while (library.firstChild) {
        library.firstChild.remove();
    }

    arr.forEach((element, index, array) => {
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
}

const enchanted = new Book("Enchanted", "Ariva Derice", "Read");
addBookToLibrary(enchanted);

const yuna = new Book("Yuna, Dark City", "Anonymous", "Unread");
addBookToLibrary(yuna);

newBookBtn.addEventListener("click", () => {
    addBookDialog.showModal();
});

closeBookDialog.addEventListener("click", () => {
    addBookDialog.close();
});

bookSubmitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    myLib.push(new Book(bookTitle.value, bookAuthor.value, bookRead.value));
    renderLibrary(myLib);

    console.log(bookTitle.value);
})

renderLibrary(myLib);