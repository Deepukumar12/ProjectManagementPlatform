import dotenv from "dotenv";
import express from "express";

dotenv.config({
    path: "./.env"
});

// let myusername = process.env.username;
// console.log("value = " ,myusername);

// let mydatabase = process.env.database;
// console.log("database = " , mydatabase);

// console.log("starting a backend project!");
// console.log("starting a project management platform!");


// const express = require('express');
const app = express() 
const port = process.env.PORT  || 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get("/instagram", (req,res) => {
    res.send("This is an instagram page")
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})