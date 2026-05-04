 document.getElementById("bookForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let userName = document.getElementById("userName").value;
    let favoriteBook = document.getElementById("favoriteBook").value;
    let genre = document.getElementById("genre").value;
    let messageBox = document.getElementById("messageBox");

    if (favoriteBook.toLowerCase().includes("harry potter")) {
        messageBox.textContent = "Hello, " + userName + "! Harry Potter is a magical choice. It is a story about friendship, courage, and new beginnings.";
    } else {
        messageBox.textContent = "Hello, " + userName + "! Your favorite book, " + favoriteBook + ", shows that you enjoy " + genre + " stories.";
    }
});