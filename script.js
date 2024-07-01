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

/* function Book(title, author, isRead) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
} */

class Book{
    constructor(title, author, isRead) {
        this.title = title;
        this.author = author;
        this.isRead = isRead;
    }

    addBookToLibrary() {
        myLib.push(this);
    }
}

/* function addBookToLibrary(book) {
    if (Object.getPrototypeOf(book) === Book.prototype) { // If this is a book, add it to the library
        myLib.push(book);
    };
} */

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

        var removeBtn = document.createElement("input");
        removeBtn.setAttribute("type", "button");
        removeBtn.addEventListener("click", (e) => {
            e.preventDefault();
        
            myLib.splice(index, 1);
            renderLibrary(myLib);
        
            console.log(bookTitle.value);
        });
        removeBtn.setAttribute("id", "removeBtn");
        removeBtn.setAttribute("value", "Delete Record");
        newBook.appendChild(removeBtn);

        var readBtn = document.createElement("input");
        readBtn.setAttribute("type", "button");
        readBtn.addEventListener("click", (e) => {
            e.preventDefault();
        
            if (myLib[index].isRead === "Read") {
                myLib[index].isRead = "Unread";
            }
            else {
                myLib[index].isRead = "Read";
            }

            renderLibrary(myLib);
        
            console.log(bookTitle.value);
        });
        
        readBtn.setAttribute("id", "readBtn");
        readBtn.setAttribute("value", "Change Read");
        newBook.appendChild(readBtn);

        library.appendChild(newBook);
    });
}

const enchanted = new Book("Enchanted", "Ariva Derice", "Read");
enchanted.addBookToLibrary();

const yuna = new Book("Yuna, Dark City", "Anonymous", "Unread");
yuna.addBookToLibrary();

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

    addBookDialog.close();
})

renderLibrary(myLib);