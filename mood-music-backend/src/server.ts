import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // Gets port from .env or use 3000
const APP_NAME = process.env.APP_NAME || "Default App"; // Use .env APP_NAME

app.use(express.json());

app.get('/', (req, res) => {
    res.send(`${APP_NAME} is running!`);
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on port ${PORT}`)
});