let books = new Set();
books.add("Pride and Prejudice");
books.add("War and Peace").add("Oliver Twist");
books.add("Pride and Prejudice");

console.log(books);
console.log(books.size);

books.delete("Oliver Twist");

console.log("has Oliver Twist", books.has("Oliver Twist"));

// ##################################################

let movies = new Set()
movies.add("Avengers Endgame")
movies.add("Avengers Infinity War").add("Iron Man 3")
movies.add("Avengers Infinity War")

console.log(movies)
console.log(movies.size)
movies.delete("Iron Man 3")
console.log("has Iron Man 3", movies.has("Iron Man 3"))
