const calculateWeightLostInAMonth = (cycling, running, swimming, extraCalorieIntake) => {

   // Check for invalid or negative parameters
   if (cycling <= 0 || running <= 0 || swimming <= 0 || extraCalorieIntake < 0) {
      return -1;
   }

   const DAYS_IN_A_MONTH = 30;

   const caloriesBurnedCycling1Hour = 2 * cycling;
   const caloriesBurnedRunning1Hour = 2 * running;
   const caloriesBurnedSwimming1Hour = 2 * swimming;

   const weeklyCaloriesBurned = caloriesBurnedCycling1Hour + caloriesBurnedRunning1Hour + caloriesBurnedSwimming1Hour;
   const monthlyExtraCalorieIntake = extraCalorieIntake * DAYS_IN_A_MONTH;

   const monthlyCaloriesBurned = (weeklyCaloriesBurned * (parseInt(DAYS_IN_A_MONTH / 7))) - monthlyExtraCalorieIntake;

   const weightLostInAMonth = monthlyCaloriesBurned / 1000;

   return parseFloat(weightLostInAMonth.toFixed(1)); // to round off to one decimal place and match the expected test output
}

module.exports = calculateWeightLostInAMonth;
