import { Book } from "./Book";
import { Ebook } from "./Ebook";

let IsbnRegex = /^[1-9]{13}$/;
let nevREgex = /[aA-zZ]{1,}/;

let books : Array<Book> =  [];
    document.addEventListener('DOMContentLoaded', () => {
        console.log('content loaded')
        

        let title = document.getElementById('title') as HTMLInputElement;
        let price = document.getElementById('price') as HTMLInputElement;
        let weight = document.getElementById('weight') as HTMLInputElement;
        let isbn = document.getElementById('isbn') as HTMLInputElement;
        let ebook = document.getElementById('ebook') as HTMLInputElement;

        console.log(ebook.value);

        document.getElementById('addButton')!.addEventListener('click', () => {
            let helyes = false;
            let ebookE = false;
            alert(isbn.value)
            if (!IsbnRegex.test(isbn.value)) {
                document.getElementById('wrongIsbn')!.textContent = 'Hibás Isbn';
            } else {
                document.getElementById('wrongIsbn')!.textContent = '✅';
                helyes = true;
            }

            if (!helyes) {
                return false
            }

            if(ebook.checked)
            {
                books.push(new Ebook(100,title.value, price.value, isbn.value))
            }

            console.log(books)
        })
    })