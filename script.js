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

const bookError = document.querySelector(".error");

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

bookTitle.addEventListener("input", (e) => {
    if (bookTitle.validity.valid) {
        bookError.textContent = "";
        bookError.className = "error";
    }
    else {
        if (bookTitle.validity.valueMissing) {
            bookError.textContent = "Please enter a value into the book title field.";
        }
        bookError.className = "error active";
    }
})

bookAuthor.addEventListener("input", (e) => {
    if (bookAuthor.validity.valid) {
        bookError.textContent = "";
        bookError.className = "error";
    }

    else {
        if (bookAuthor.validity.valueMissing) {
            bookError.textContent = "Please enter a value into the book author field.";
        }
        bookError.className = "error active";
    }
})

bookRead.addEventListener("input", (e) => {
    readConstraint = new RegExp("[Rr]ead|[Uu]nread", "");
    console.log(readConstraint.test(bookRead.value));
    if (bookRead.validity.valid) {
        bookError.textContent = "";
        bookError.className = "error";
    }
    else {
        if (bookRead.validity.valueMissing) {
            bookError.textContent = "Please enter a value into the book author field.";
        }
        else if (!readConstraint.test(bookRead)) {
            bookError.textContent = "Book must be read or unread.";
        }  
        bookError.className = "error active";
    }
})

bookSubmitForm.addEventListener("submit", (e) => {
    e.preventDefault();

    readConstraint = new RegExp("[Rr]ead|[Uu]nread", "");
    console.log(readConstraint);

    if (bookTitle.validity.valueMissing) {
        bookError.textContent = "Please enter a value into the book title field.";
        bookError.className = "error active";
    }

    if (bookRead.validity.valueMissing) {
        bookError.textContent = "Please enter a value into the book author field.";
    }

    if (!readConstraint.test(bookRead.value)) {
        bookError.textContent = "Book must be read or unread.";
        bookError.className = "error active";
    }  

    else {
        myLib.push(new Book(bookTitle.value, bookAuthor.value, bookRead.value));
        renderLibrary(myLib);
    
        console.log(bookTitle.value);
    
        addBookDialog.close();
    }

})

renderLibrary(myLib);