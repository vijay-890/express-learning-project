const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "My Express App is Working 🚀",
        appName: process.env.APP_NAME,
        environment: process.env.NODE_ENV
    });
});

app.get("/api/student", (req, res) => {
    res.json({
        id: 101,
        name: "Vijay",
        course: "MERN Stack"
    });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});