import express from "express";

const app = express();

app.get("/", (req, res) =>{
    res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
    res.send("This is an instagram page");
});

app.get("/google", (req, res) => {
    res.send("This is a google page");
});




export default app;