"use strict";
let books = [
    { id: 1, title: "Harry Potter and the Philosopher's Stone", author: "J.K Rowling", isAvalable: true, publishedYear: 1997, category: ["Fantasy", "Thriller"] },
    { id: 2, title: "Harry Potter and the Chamber of Secrets", author: "J.K Rowling", isAvalable: false, publishedYear: 1998, category: ["Fantasy", "Mystery"] },
    { id: 3, title: "Harry Potter and the Prisoner of Azkaban", author: "J.K Rowling", isAvalable: true, publishedYear: 1999 }
];
let members = [
    { id: 1, name: "Habil", email: "habilherdianto233z@gmail.com", phone: +628111120503 },
    { id: 2, name: "Rhine", email: "rhine233@gmail.com" }
];
function bookInformation(searchId) {
    const searchedBook = books.find(book => book.id === searchId);
    console.log(searchedBook);
}
function bookAvalablitiy(searchId) {
    const searchedBook = books.find(book => book.id === searchId);
    console.log("Avalable:" + searchedBook?.isAvalable);
}
bookInformation(2);
bookAvalablitiy(2);
