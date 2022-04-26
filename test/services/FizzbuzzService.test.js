const Reader = require("./../../lib/utils/Reader");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

describe("Unit test for FizzbuzzService class", () => {
  test("Validate explorer with fizzbuzz", () => {
    const explorer15 = {
      name: "Woopa15",
      githubUsername: "ajolonauta15",
      score: 15,
      mission: "node",
      stacks: ["javascript", "elixir", "groovy", "reasonML", "elm"],
    };
    const explorerValidated =
      FizzbuzzService.applyValidationInExplorer(explorer15);

    expect(explorerValidated.trick).toBe("FIZZBUZZ");
  });
});
