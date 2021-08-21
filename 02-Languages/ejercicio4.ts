type Book = {
    title: string;
    isRead: boolean;
}

function isBookRead(books: Book[], titleToSearch: string) {
    return books.some(book => book.title === titleToSearch && book.isRead);
}

const books:Book[] = [
    {title: "Harry Potter y la piedra filosofal", isRead: true},
    {title: "Canción de hielo y fuego", isRead: false},
    {title: "Devastación", isRead: true},
];

isBookRead(books, "Devastación");
isBookRead(books, "Canción de hielo y fuego");
isBookRead(books, "Los Pilares de la Tierra");