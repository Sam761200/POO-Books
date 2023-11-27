class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this.isAvailable = true;
    }
  
    toString() {
      return `${this.title} par ${this.author}`;
    }
  }
  
  class User {
    constructor(name) {
      this.name = name;
      this.borrowedBooks = [];
    }
  
    borrowBook(book) {
      if (book.isAvailable) {
        this.borrowedBooks.push(book);
        book.isAvailable = false;
        console.log(`${this.name} a emprunté "${book.title}".`);
      } else {
        console.log(`${book.title} n'est pas disponible.`);
      }
    }
  
    returnBook(book) {
      const index = this.borrowedBooks.indexOf(book);
      if (index !== -1) {
        this.borrowedBooks.splice(index, 1);
        book.isAvailable = true;
        console.log(`${this.name} a retourné "${book.title}".`);
      }
    }
  
    listBorrowedBooks() {
      console.log(`${this.name} a emprunté les livres suivants:`);
      this.borrowedBooks.forEach(book => {
        console.log(`- ${book.toString()}`);
      });
    }
  }
  
  class Library {
    constructor() {
      this.books = [];
    }
  
    addBook(book) {
      this.books.push(book);
      console.log(`Le livre "${book.title}" a été ajouté à la bibliothèque.`);
    }
  
    listBooks() {
      console.log('Livres disponibles dans la bibliothèque:');
      this.books.forEach(book => {
        if (book.isAvailable) {
          console.log(`- ${book.toString()}`);
        }
      });
    }
  }
  
  // Utilisation des classes
  const library = new Library();
  
  const book1 = new Book('Le Seigneur des Anneaux', 'J.R.R. Tolkien', '978-0-395-19395-7');
  const book2 = new Book('Harry Potter à l\'école des sorciers', 'J.K. Rowling', '978-2-07-061912-2');
  const book3 = new Book('1984', 'George Orwell', '978-2-07-039350-1');
  
  library.addBook(book1);
  library.addBook(book2);
  library.addBook(book3);
  
  const user1 = new User('Alice');
  const user2 = new User('Bob');
  
  user1.borrowBook(book1);
  user2.borrowBook(book2);
  user1.borrowBook(book2); // Ce livre est déjà emprunté par Bob
  
  user1.listBorrowedBooks();
  user2.listBorrowedBooks();
  
  user1.returnBook(book1);
  user1.listBorrowedBooks();
  
  library.listBooks();
  