import { Book } from "./Book";

export class Ebook implements Book {
    size: number;
    title: string;
    price: number;
    isbn: string;


    constructor (size: number, title: string, price: number, isbn: string) {
        this.size=size;
        this.title=title;
        this.price=price;
        this.isbn=isbn;
    }
}