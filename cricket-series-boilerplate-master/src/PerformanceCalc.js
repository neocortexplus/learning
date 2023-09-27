const PerformanceCalculator = (runs, balls) => {
      let battingAverage = runs / balls;

      if (runs > 30 && balls < 15) {
            battingAverage += battingAverage * 0.01; // Add 1% if runs > 30 and balls < 15
      }

      if (runs > 50 && balls < 20) {
            battingAverage += battingAverage * 0.1; // Add 10% if runs > 50 and balls < 20
      }

      if (runs > 100 && balls < 50) {
            battingAverage += battingAverage * 0.2; // Add 20% if runs > 100 and balls < 50
      }

      return battingAverage;
}

module.exports = { PerformanceCalculator };
