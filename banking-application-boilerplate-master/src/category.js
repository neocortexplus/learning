// src/category.js
var category = function category(key) {
  const categories = {
    'pl': 'Personal Loan',
    'Vl': 'Vehicle Loan',
    'EL': 'Education Loan',
    'hL': 'Home Loan',

    // Add other categories as needed
  };

  return categories[key];
};

module.exports = {
  category: category
};
