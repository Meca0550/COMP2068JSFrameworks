import express from "express";

const app = express();
const port = 3000;

app.get("/lab2", (req, res) => {

    const method = req.query.method as string;
    const x = Number(req.query.x);
    const y = Number(req.query.y);

    if (!method || isNaN(x) || isNaN(y)) {
        res.send("Error: Please provide method, x, and y correctly.");
        return;
    }

    let result: number;
    let symbol: string;

    if (method === "add") {
        result = x + y;
        symbol = "+";
    }
    else if (method === "subtract") {
        result = x - y;
        symbol = "-";
    }
    else if (method === "multiply") {
        result = x * y;
        symbol = "*";
    }
    else if (method === "divide") {
        if (y === 0) {
            res.send("Error: Cannot divide by zero.");
            return;
        }
        result = x / y;
        symbol = "/";
    }
    else {
        res.send("Error: Invalid method. Use add, subtract, multiply, or divide.");
        return;
    }

    res.send(`${x} ${symbol} ${y} = ${result}`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
