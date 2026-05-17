let movies = []; // Initialize an empty array to store movie objects
while (true) { // Start an infinite loop to continuously ask for movie input
    let title = prompt("Enter the name of the movie (or press Cancel to finish):"); // Prompt the user for the movie title
    if (title === null) { // Check if the user pressed Cancel
        break; // Exit the loop if Cancel is pressed
    }
    let imdb = parseFloat(prompt("Enter the IMDb rating for " + title + ":")); // Prompt the user for the IMDb rating and convert it to a floating-point number
    movies.push({ title: title, imdb: imdb }); // Add a new movie object to the movies array with the title and IMDb rating
}
movies.sort((a, b) => b.imdb - a.imdb); // Sort the movies array in descending order based on the IMDb rating. Supriseingly a same method that I know from Python works in JavaScript as well, but with a different syntax. The sort method takes a comparison function that compares the IMDb ratings of two movie objects and sorts them accordingly.
console.log("Movies with a rating less than 7:"); // Print a header for movies with ratings less than 7
for (let movie of movies) { // Iterate through each movie in the movies array
    if (movie.imdb < 7) { // Check if the movie's IMDb rating is less than 7
        console.log(movie.title + " (" + movie.imdb + ")"); // Print the movie title and its rating
    }
}
console.log("Movies with a rating of 7 or higher:"); // Print a header for movies with ratings of 7 or higher
for (let movie of movies) { // Iterate through each movie in the movies array again
    if (movie.imdb >= 7) { // Check if the movie's IMDb rating is greater than or equal to 7
        console.log(movie.title + " (" + movie.imdb + ")"); // Print the movie title and its rating
    }
}// This program allows the user to input multiple movies and their ratings, stores them in an array of objects, and then categorizes and prints the movies based on their ratings.