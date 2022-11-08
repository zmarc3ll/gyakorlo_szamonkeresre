import { Book } from "./Book";

export class PaperBook implements Book {
    weight: number;
    title: string;
    price: number;
    isbn: string;


    constructor (weight: number, title: string, price: number, isbn: string) {
        this.weight=weight;
        this.title=title;
        this.price=price;
        this.isbn=isbn;
    }
} 
