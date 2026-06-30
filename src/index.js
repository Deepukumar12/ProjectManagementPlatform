import dotenv from "dotenv";

dotenv.config({
    path: "./.env"
});

let myusername = process.env.username;
console.log("value = " ,myusername);

let mydatabase = process.env.database;
console.log("database = " , mydatabase);

console.log("starting a backend project!");
console.log("starting a project management platform!");