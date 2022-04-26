class ExplorerService {
  static filterByMission = (explorers, mission) =>
    explorers.filter((explorer) => explorer.mission === mission);

  static getAmountOfExplorersByMission = (explorers, mission) =>
    this.filterByMission(explorers, mission).length;

  static getExplorersUsernmaesByMission = (explorers, mission) =>
    this.filterByMission(explorers, mission).map(
      (explorer) => explorer.githubUsername
    );
}

module.exports = ExplorerService;
