class FizzbuzzService {
    static applyValidationInExplorer = (explorer) => {
        if (explorer.score % 5 === 0 && explorer.score % 3 === 0) {
            explorer.trick = "FIZZBUZZ";
            return explorer;
        } else if (explorer.score % 5 === 0) {
            explorer.trick = "BUZZ";
            return explorer;
        } else if (explorer.score % 3 === 0) {
            explorer.trick = "FUZZ";
            return explorer;
        } else {
            explorer.trick = explorer.score;
            return explorer;
        }
    };

    static applyValidationInNumber = (number) => {
        if (number % 5 === 0 && number % 3 === 0) return "FIZZBUZZ";
        if (number % 5 === 0) return "FIZZ";
        if (number % 3 === 0) return "BUZZ";
        return number;
    };
}

module.exports = FizzbuzzService;
