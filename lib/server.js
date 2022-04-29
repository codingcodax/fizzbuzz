const express = require("express");
const ExplorerController = require("./controllers/ExplorerController");

const app = express();
app.use(express.json());

const PORT = 3000;

app.get("/", (_req, res) => {
  res.json({ message: "FizzBuzz api welcome!" });
});

app.get("/v1/explorers/:mission", (req, res) => {
  const { mission } = req.params;

  const explorersInMission = ExplorerController.getExplorersByMission(mission);

  res.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
  const { mission } = req.params;

  const explorersAmountInMission =
    ExplorerController.getExplorersAmountByMission(mission);

  res.json({ mission, qty: explorersAmountInMission });
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
  const { mission } = req.params;

  const explorersUsernamesInMission =
    ExplorerController.getExplorersUsernamesByMission(mission);

  res.json({ mission, explorers: explorersUsernamesInMission });
});

app.get("/v1/fizzbuzz/:number", (req, res) => {
  const { number } = req.params;

  const trick = ExplorerController.getFizzBuzzStatus(number);

  res.json({ score: number, trick });
});

app.listen(PORT, () => {
  console.log(`FizzBuzz API in port ${PORT}`);
});
