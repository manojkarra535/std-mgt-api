const express = require("express");

const app = express();

app.use(express.json());

// Home API
app.get("/", (req, res) => {
  res.send("Welcome to the Student Management API");
});

// Get users
app.get("/api/users", (req, res) => {
  res.json([
    { id: 1, name: "Manoj" },
    { id: 2, name: "John" }
  ]);
});

// Create user
app.post("/api/users", (req, res) => {
  const user = req.body;

  res.status(201).json({
    message: "User created successfully",
    user: user
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});