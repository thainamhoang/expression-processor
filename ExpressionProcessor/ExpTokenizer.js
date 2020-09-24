const { operators } = require("./Constants");
const ExpTokenizer = (str) => {
  for (const op of operators) {
    const index = str.indexOf(op);
    if (index !== -1) {
      const field = str.slice(0, index);
      const operator = str.slice(index, index + op.length);
      const value = str.slice(index + op.length, str.length);
      return { field, operator, value };
    }
  }
  return {};
};

module.exports = ExpTokenizer;
