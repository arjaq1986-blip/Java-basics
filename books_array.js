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
//checking the books array whether it is correctly created
books.forEach(book => {
  console.log(Object.values(book).join(", "));
});