
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    shop: "Kyaw Gyi Game Shop",
    message: "Backend is running!"
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.post("/api/mlbb/lookup", (req, res) => {
  const { playerId, serverId } = req.body || {};

  if (!playerId || !serverId) {
    return res.status(400).json({
      error: "Player ID and Server ID are required"
    });
  }

  return res.status(501).json({
    error: "Nickname lookup provider is not configured yet"
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
