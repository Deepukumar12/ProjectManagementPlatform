import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

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

// Middleware-> basic configurations
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb"}));
app.use(express.static("public"));
app.use(cookieParser());

// CORS configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN?.split(",") || "http://localhost:5173",
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
}),
);

// import the routes
import healthCheckRoute from "./routes/healthcheck.routes.js";
import authRouter from "./routes/auth.routes.js";


app.use("/api/v1/healthcheck", healthCheckRoute);
app.use("/api/v1/auth", authRouter);

app.get("/", (req, res) => {
    res.send("this is a healthcheck route!");
});


export default app;