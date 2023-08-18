const fs = require("node:fs/promises");
const fscallback = require("node:fs");

/*  using promises  */
// Appending a file and creating if does'nt exists
fs.appendFile("file.txt", "this is the data in the file")
  .then(() => {
    console.log("File appended sucessfully");
  })
  .catch((e) => {
    console.log("error : ", e);
  });

/* using callbacks */
fscallback.readFile("file.txt", (err, data) => {
  data = data.toString();
  if (err) {
    console.log(err);
  } else console.log("DATA : ", data);
});

/*  ASYNC AWAIT */
const deletFile = async (filePath) => {
  try {
    // deletes file
    await fs.unlink(filePath);
    console.log(`File deleted sucessfully ${filePath}`);
  } catch (e) {
    console.log("ERROR : ", e);
  }
};

deletFile("file.txt");

/* ONLY can be used in .mjs files i.e EJS modules */
// const filePath = "file.txt"
// try {
//   // deletes file
//   await fs.unlink(filePath);
//   console.log(`File deleted sucessfully ${filePath}`);
// } catch (e) {
//   console.log("ERROR : ", e);
// }
