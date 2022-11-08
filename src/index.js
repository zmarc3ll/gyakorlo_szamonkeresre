"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Ebook_1 = require("./Ebook");
let IsbnRegex = /^[1-9]{13}$/;
let nevREgex = /[aA-zZ]{1,}/;
let books = [];
document.addEventListener('DOMContentLoaded', () => {
    console.log('content loaded');
    let title = document.getElementById('title');
    let price = document.getElementById('price');
    let weight = document.getElementById('weight');
    let isbn = document.getElementById('isbn');
    let ebook = document.getElementById('ebook');
    console.log(ebook.value);
    document.getElementById('addButton').addEventListener('click', () => {
        let helyes = false;
        let ebookE = false;
        alert(isbn.value);
        if (!IsbnRegex.test(isbn.value)) {
            document.getElementById('wrongIsbn').textContent = 'Hibás Isbn';
        }
        else {
            document.getElementById('wrongIsbn').textContent = '✅';
            helyes = true;
        }
        if (!helyes) {
            return false;
        }
        if (ebook.checked) {
            books.push(new Ebook_1.Ebook(100, title.value, price.value, isbn.value));
        }
        console.log(books);
    });
});
