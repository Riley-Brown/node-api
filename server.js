const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

// Routes
const todos = require("./routes/todos");

const app = express();

app.use("/api/v1/todos", todos);
const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} on port ${PORT}`)
);
