const Reader = require("./../../lib/utils/Reader");

describe("Unit Tests for Reader class", () => {
    test("Read file", () => {
        const explorer1 = {
            name: "Woopa1",
            githubUsername: "ajolonauta1",
            score: 1,
            mission: "node",
            stacks: ["javascript", "reasonML", "elm"],
        };

        const path = "./explorers.json";
        const explorers = Reader.readJsonFile(path);

        expect(explorers[0]).toStrictEqual(explorer1);
    });
});
