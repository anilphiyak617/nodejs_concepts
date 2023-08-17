const getDefault = () => {
  console.log("This is Default");
};

function add(a, b) {
  return a + b;
}

// Attach named exports to the exports object
exports.add = add;

/* default export */
module.exports = {
  ...exports,
  getDefault,
};
