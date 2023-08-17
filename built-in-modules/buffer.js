// Create a buffer from the string "Anil"
const buffer = Buffer.from("Anil");

// Write the string "book" into the buffer starting from the beginning
buffer.write("book");

// Output the content of the buffer
console.log(buffer);

// Output the content of the buffer as a JSON representation
console.log(buffer.toJSON());
