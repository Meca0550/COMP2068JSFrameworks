import express from "express";
import portfolioRouter from "./routes/portfolio.routes.js";

const app = express();
const port = 3000;

// Middleware
app.use(express.json());

// Mount routes
app.use("/api", portfolioRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
