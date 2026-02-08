import express from "express";

const app = express();
const port = 3000;

// Basic test route
app.get("/", (req, res) => {
  res.send("Portfolio API is running");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
