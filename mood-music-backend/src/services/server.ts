import express from "express";
import { setupMiddleware } from "../middleware";
import { PORT, APP_NAME } from "../constants";

const app = express();
setupMiddleware(app);

app.get('/', (req, res) => {
    res.send(`${APP_NAME} is running!`);
});

app.listen(PORT, () => {
    console.log(`${APP_NAME} is running on port ${PORT}`)
});