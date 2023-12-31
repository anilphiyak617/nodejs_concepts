const fs = require("node:fs");

const readableStream = fs.createReadStream("./file.txt", {
  endcoding: "utf-8",
  // setting the chunk size
  highWaterMark: 3,
});

const writableStream = fs.WriteStream("./file2.txt");
// "data" event is emmited by the readableStream  while stremaing the
// data from the file
// readableStream.on("data", (chunks) => {
//   console.log(chunks.toString());
//   writableStream.write(chunks);
// });

console.log("after streaming");
// PIPING
const writableStreamFile3 = fs.createWriteStream("./file3.txt");
readableStream.pipe(writableStreamFile3);
readableStream.pipe(writableStream);
