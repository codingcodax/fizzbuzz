const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

describe("Unit test for ExplorerService class", () => {
    const explorers = Reader.readJsonFile("explorers.json");

    test("Filter explorers depending on his mission", () => {
        const explorersFilter = ExplorerService.filterByMission(explorers, "node");

        expect(explorersFilter[0].mission).toBe("node");
    });

    test("Get amount of explorers depending on his mission", () => {
        const noOfExplorersInMission =
      ExplorerService.getAmountOfExplorersByMission(explorers, "node");

        expect(noOfExplorersInMission).toBe(10);
    });

    test("Get usernames of the explorers depending on his mission", () => {
        const explorersUsernames = ExplorerService.getExplorersUsernmaesByMission(
            explorers,
            "node"
        );

        expect(explorersUsernames[0]).toBe("ajolonauta1");
    });
});
