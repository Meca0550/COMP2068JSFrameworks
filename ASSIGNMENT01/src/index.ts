import express from "express";
import portfolioRouter from "./routes/portfolio.routes.js";

const app = express();

const port = process.env.PORT ? Number(process.env.PORT) : 3000;


// middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// mount routes
app.use("/api", portfolioRouter);

// 404
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
