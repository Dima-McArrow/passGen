// app.js

const path = require('path')
const express = require('express')
const { body, validationResult } = require("express-validator")
const helmet = require("helmet")
const app = express()
const port = process.env.PORT || 3000
const cors = require("cors");


const passGenRouter = require('./routes/passGenRouter.js')

app.use(helmet())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, '..', 'public')))

const allowedOrigins = [
  "http://localhost:5500",
  "http://localhost:3001",
  "http://localhost:3000",
  "http://127.0.0.1:5500",
  "https://sandrine-coupart-site-b014ac181df6.herokuapp.com", // Production environment
];

app.use(
  cors({
    origin: function (origin, callback) {
      console.log("Received origin:", origin);
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        console.log("Blocked origin:", origin); // Log blocked origin for debugging
        callback(new Error("CORS not allowed from this origin"), false);
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    preflightContinue: false,
    optionsSuccessStatus: 204,
  })
);

// Handle GET request for the root URL
app.get("/", (req, res) => {
  // Redirect to ../public/index.html
  res.redirect("/index.html")
})


app.use("/api", passGenRouter)

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
})

