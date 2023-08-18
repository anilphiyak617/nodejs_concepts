import express from "express";
import morgan from "morgan";

const app = express();
app.use(morgan("common"));
app.use(express.json());

app.get("", (req, res) => {
  res.json({ name: "book" });
});
app.listen(8000, () => {
  console.log("listening on port 8000");
});
