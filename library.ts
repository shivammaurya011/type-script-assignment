// Enum for Genres
enum Genre {
    Fiction = "Fiction",
    NonFiction = "Non-Fiction",
    Mystery = "Mystery",
    Thriller = "Thriller",
    ScienceFiction = "Science Fiction",
    Biography = "Biography",
  }
  
  // Union Type for Book Formats
  type BookFormat = "Paperback" | "Hardcover" | "Ebook";
  
  // Interface for Book Object
  interface Book {
    id: number;
    title: string;
    author: string;
    genre: Genre;
    quantity: number;
  }
  
  // Intersection Type for LibraryBook
  type LibraryBook = Book & { format: BookFormat };
  
  // Interface for Library
  interface Library {
    inventory: LibraryBook[];
  }
  
  // Initialize Library Inventory
  const library: Library = {
    inventory: [
      { id: 1, title: "1984", author: "George Orwell", genre: Genre.Fiction, quantity: 5, format: "Paperback" },
      { id: 2, title: "The Silent Patient", author: "Alex Michaelides", genre: Genre.Mystery, quantity: 2, format: "Hardcover" },
      { id: 3, title: "Becoming", author: "Michelle Obama", genre: Genre.Biography, quantity: 3, format: "Ebook" },
      { id: 4, title: "Dune", author: "Frank Herbert", genre: Genre.ScienceFiction, quantity: 4, format: "Paperback" },
    ],
  };
  
  // Function to Display Inventory
  function displayInventory(library: Library): void {
    console.log("Library Inventory:");
    library.inventory.forEach((book) => {
      console.log(
        `ID: ${book.id}, Title: "${book.title}", Author: ${book.author}, Genre: ${book.genre}, Quantity: ${book.quantity}, Format: ${book.format}`
      );
    });
  }
  
  // Function to Search Books
  function searchBooks(
    library: Library,
    searchKey: "title" | "author" | "genre",
    searchValue: string
  ): LibraryBook[] {
    return library.inventory.filter((book) => book[searchKey].toLowerCase() === searchValue.toLowerCase());
  }
  
  // Function to Update Book Quantity
  function updateBookQuantity(library: Library, bookId: number, newQuantity: number): void {
    const book = library.inventory.find((book) => book.id === bookId);
    if (book) {
      book.quantity = newQuantity;
      console.log(`Updated quantity for "${book.title}" to ${newQuantity}.`);
    } else {
      console.log("Book not found!");
    }
  }
  
  // Main Function
  function main(): void {
    // Display initial inventory
    displayInventory(library);
  
    // Search for books
    console.log("\nSearching for books by author 'George Orwell':");
    const searchResults = searchBooks(library, "author", "George Orwell");
    console.log(searchResults);
  
    // Update book quantity
    console.log("\nUpdating quantity for book ID 1:");
    updateBookQuantity(library, 1, 10);
  
    // Display updated inventory
    console.log("\nUpdated Inventory:");
    displayInventory(library);
  }
  
  // Run the Main Function
  main();
  