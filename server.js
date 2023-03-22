// todo - declare variables

// import functions/routes

// todo - connect to database

// todo - set middleware

// todo - set routes

// todo - start server

// server/server.js
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const homeRoutes = require("./routes/home");

dotenv.config();
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use("/", homeRoutes);

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.error("Database connection failed:", error);
  });