//creating an array of objects to store information about books
let books=[{title: "Speaking JavaScript",
    author: "Axel Rauschmayer",
    pages: 460},
    {title: "Programming JavaScript Applications",
    author: "Eric Elliott",
    pages: 254  
    },
    {title: "Understanding ECMAScript 6",
    author: "Nicholas C. Zakas",
    pages: 352  
    }];

// Adding a new book to the array
books.push({
  title: "Learning JavaScript Design Patterns",
  author: "Addy Osmani",
  pages: 254
});
books.shift();
//displaying the length of the array after removing the first book
console.log(`Total books after removal: ${books.length}`);
//displaying the titles of the remaining books in the collection
const titlesString = books.map(book => book.title).join(", ");
console.log(titlesString);