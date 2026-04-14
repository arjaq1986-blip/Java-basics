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
//calculating the total number of pages in the collection
let sum = books.reduce((total, book) => total + book.pages, 0);
//displaying the total number of pages in the collection
console.log(`Total pages in the collection: ${sum}`);
