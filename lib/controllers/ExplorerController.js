const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    static getExplorersByMission = (mission) => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(
            explorers,
            mission
        );

        return explorersByMission;
    };

    static getExplorersUsernamesByMission = (mission) => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernamesByMission =
      ExplorerService.getExplorersUsernmaesByMission(explorers, mission);

        return explorersUsernamesByMission;
    };

    static getExplorersAmountByMission = (mission) => {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmountByMission =
      ExplorerService.getAmountOfExplorersByMission(explorers, mission);

        return explorersAmountByMission;
    };

    static getFizzBuzzStatus = (number) => {
        const fizzBuzzStatus = FizzbuzzService.applyValidationInNumber(number);

        return fizzBuzzStatus;
    };

    static getFizzBuzzStatusFull(number) {
        const fizzBuzzStatus = this.getFizzBuzzStatus(number);

        return `Tu número es: ${number}. Validación: ${fizzBuzzStatus}`;
    }
}

module.exports = ExplorerController;
