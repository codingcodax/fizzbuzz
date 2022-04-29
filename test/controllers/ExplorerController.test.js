const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Unit test for ExplorerController class", () => {
  test("Filter list of explorers by mission", () => {
    const explorersByMission = ExplorerController.getExplorersByMission("node");

    expect(explorersByMission[0].mission).toBe("node");
  });

  test("Get usernames of explorers depending on his mission", () => {
    const explorersUsernames =
      ExplorerController.getExplorersUsernamesByMission("node");

    expect(explorersUsernames[0]).toBe("ajolonauta1");
  });

  test("Get explorers amount depending on his mission", () => {
    const noOfExplorersInMission =
      ExplorerController.getExplorersAmountByMission("node");

    expect(noOfExplorersInMission).toBe(10);
  });

  test("Fizzbuzz status", () => {
    const fizzbuzzStatus = ExplorerController.getFizzBuzzStatus(15);

    expect(fizzbuzzStatus).toBe("FIZZBUZZ");
  });
});
