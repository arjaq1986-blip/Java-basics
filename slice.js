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

//checking the books array whether it is correctly created
books.forEach(book => {
  console.log(Object.values(book).join(", "));
});
//slicing the last 2 books from the array to create a new array
let slicedBooks = books.slice(-2);
//checking the slicedBooks array whether it is correctly created
slicedBooks.forEach(book => {
  console.log(Object.values(book).join(", "));
});
