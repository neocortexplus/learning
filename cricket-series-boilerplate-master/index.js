const { PerformanceCalculator } = require('./src/PerformanceCalc');

const main = () => {
    let Player1 = ["Player1", 40, 12]; // [name, runs, balls]
    let Player2 = ["Player2", 65, 15];
    let Player3 = ["Player3", 150, 46];

    var Players = [];
    Players.push(Player1);
    Players.push(Player2);
    Players.push(Player3);

    Players.forEach(player => {
        console.log(player[0] + " : " + "Batting Average = " + PerformanceCalculator(player[1], player[2]));
    });
}

main();
