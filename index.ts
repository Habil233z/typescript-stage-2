interface Book {
    id: string | number,
    title: string,
    author: string,
    isAvalable: boolean,
    publishedYear: number,
    category?: string[]
}

interface Member {
    id: number,
    name: string,
    email: string,
    phone?: number
}

let books: Book[] = [
    {id: 1, title: "Harry Potter and the Philosopher's Stone", author: "J.K Rowling", isAvalable: true, publishedYear : 1997, category: ["Fantasy", "Thriller"]},
    {id: 2, title: "Harry Potter and the Chamber of Secrets", author: "J.K Rowling", isAvalable: false, publishedYear : 1998, category: ["Fantasy", "Mystery"]},
    {id: 3, title: "Harry Potter and the Prisoner of Azkaban", author: "J.K Rowling", isAvalable: true, publishedYear : 1999}
]

let members: Member[] = [
    {id:1 , name: "Habil", email: "habilherdianto233z@gmail.com", phone: +628111120503},
    {id:2 , name: "Rhine", email: "rhine233@gmail.com"}
]

function bookInformation(searchId: string| number):void {
    const searchedBook = books.find(book=> book.id === searchId)
    console.log(searchedBook)
}

function bookAvalablitiy(searchId: string| number):void {
    const searchedBook = books.find(book=> book.id === searchId)
    if(searchedBook?.isAvalable === true) {
        let status = "The book is avalable to purchase"
    }
    console.log("Is avalable:")
}

bookInformation(2)
bookAvalablitiy(2)
