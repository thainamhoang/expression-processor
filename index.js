const Tokenizer = require("./ExpressionProcessor/Tokenizer");
const ExpTokenizer = require("./ExpressionProcessor/ExpTokenizer");
const ChooseOp = require("./ExpressionProcessor/ChooseOp");
const Evaluator = require("./ExpressionProcessor/Evaluator");

const Run = (data, conditionString) => {
  let tokens = Tokenizer(conditionString);
  let newTokens = [];
  tokens.forEach((token) => {
    if (token) {
      if (token["type"] !== "EXPRESSION") {
        newTokens.push(token["value"]);
      } else if (token["type"] === "EXPRESSION") {
        const exp = ExpTokenizer(token["value"]);
        const { field, operator, value } = exp;
        const result = ChooseOp(data, field, operator, value);
        newTokens.push(result);
      } else {
        console.error("WRONG TOKEN TYPE!!!");
        return false;
      }
    }
  });
  return Evaluator(newTokens.join(""));
};

module.exports = Run;
