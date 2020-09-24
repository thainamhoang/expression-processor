const Evaluator = (str) => {
  return new Function("return " + str)();
};

module.exports = Evaluator;
