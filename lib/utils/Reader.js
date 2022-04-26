const fs = require("fs");

class Reader {
  static readJsonFile = (path) => JSON.parse(fs.readFileSync(path));
}

module.exports = Reader;
