// Enum for Genres
var Genre;
(function (Genre) {
    Genre["Fiction"] = "Fiction";
    Genre["NonFiction"] = "Non-Fiction";
    Genre["Mystery"] = "Mystery";
    Genre["Thriller"] = "Thriller";
    Genre["ScienceFiction"] = "Science Fiction";
    Genre["Biography"] = "Biography";
})(Genre || (Genre = {}));
// Initialize Library Inventory
var library = {
    inventory: [
        { id: 1, title: "1984", author: "George Orwell", genre: Genre.Fiction, quantity: 5, format: "Paperback" },
        { id: 2, title: "The Silent Patient", author: "Alex Michaelides", genre: Genre.Mystery, quantity: 2, format: "Hardcover" },
        { id: 3, title: "Becoming", author: "Michelle Obama", genre: Genre.Biography, quantity: 3, format: "Ebook" },
        { id: 4, title: "Dune", author: "Frank Herbert", genre: Genre.ScienceFiction, quantity: 4, format: "Paperback" },
    ],
};
// Function to Display Inventory
function displayInventory(library) {
    console.log("Library Inventory:");
    library.inventory.forEach(function (book) {
        console.log("ID: ".concat(book.id, ", Title: \"").concat(book.title, "\", Author: ").concat(book.author, ", Genre: ").concat(book.genre, ", Quantity: ").concat(book.quantity, ", Format: ").concat(book.format));
    });
}
// Function to Search Books
function searchBooks(library, searchKey, searchValue) {
    return library.inventory.filter(function (book) { return book[searchKey].toLowerCase() === searchValue.toLowerCase(); });
}
// Function to Update Book Quantity
function updateBookQuantity(library, bookId, newQuantity) {
    var book = library.inventory.find(function (book) { return book.id === bookId; });
    if (book) {
        book.quantity = newQuantity;
        console.log("Updated quantity for \"".concat(book.title, "\" to ").concat(newQuantity, "."));
    }
    else {
        console.log("Book not found!");
    }
}
// Main Function
function main() {
    // Display initial inventory
    displayInventory(library);
    // Search for books
    console.log("\nSearching for books by author 'George Orwell':");
    var searchResults = searchBooks(library, "author", "George Orwell");
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
