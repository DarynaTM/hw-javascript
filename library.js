class book {
    // Private properties
    #title;
    #author;
    #isAvailable;

    constructor(title, author) {
        this.#title = title;
        this.#author = author;
        this.#isAvailable = true;
    }

    // Public method
    getTitle() {
        return this.#title;
    }

    // Public method
    getAuthor() {
        return this.#author;
    }

    // Public method
    isAvailable() {
        return this.#isAvailable;
    }

    // Public method
    checkoutBook() {
        if (this.#isAvailable)
            {
                this.#isAvailable = false
                console.log(`Ви взяли книгу "${this.#title}" автора ${this.#author}`);
            }
        else
        {
            console.log(`Вибачте, книга "${this.#title}" недоступна`);
        }
    }
}

class library {

    constructor() {
        this.books = [];
    }
    addBook(books) {
        this.books.push(books);
    }
    checkoutBook(title) {
      const book = this.books.find(book => book.getTitle() === title);
      if (book) {
          book.checkoutBook();
      } else {
          console.log(`Книга "${title}" не знайдена в бібліотеці`);
      }
    }
      viewAvailableBooks() {
        const availableBooks = [];
        for (let i = 0; i < this.books.length; i++) {
          if (this.books[i].isAvailable()) {
            availableBooks.push(`- "${this.books[i].getTitle()}" автора ${this.books[i].getAuthor()}`);
          }
        }
        if (availableBooks.length > 0) {
          console.log("Доступні книги:");
          for (let i = 0; i < availableBooks.length; i++) {
            console.log(availableBooks[i]);
          }
        }
        else {
          console.log("Немає доступних книг у бібліотеці.");
        }
      }
    }

    const myLibrary = new library();
    const book1 = new book("Фелікс Австрія", "Софія Андрухович");
    const book2 = new book("Сад Гетсиманський", "Іван Багряний");
    const book3 = new book("Інститутка", "Марко Вовчок");
    const book4 = new book("Інтернат", "Сергій Жадан");
    myLibrary.addBook(book1);
    myLibrary.addBook(book2);
    myLibrary.addBook(book3);
    myLibrary.addBook(book4);
    myLibrary.viewAvailableBooks();
    myLibrary.checkoutBook("Інститутка");
    myLibrary.checkoutBook("Безталанна");
    myLibrary.checkoutBook("Фелікс Австрія");
    myLibrary.viewAvailableBooks();
    myLibrary.checkoutBook("Фелікс Австрія");
    myLibrary.checkoutBook("Сад Гетсиманський");
    myLibrary.checkoutBook("Інтернат");
    myLibrary.viewAvailableBooks();
