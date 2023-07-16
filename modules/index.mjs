
console.log( "hello moto")

console.log(book)
const book_1 =  book.default;
console.log(book_1.getAuthor())
import book_2  from './books.mjs'
book_2.setAuthor("Trump")

console.log("book1 : ",book_1.getAuthor()) 
console.log("book2 : ",book_2.getAuthor()) 


import * as book from './books.mjs'
