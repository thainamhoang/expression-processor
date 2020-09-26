const Tokenizer = (str) => {
  str = String(str).replace(/\s/g, "");
  const token = [];
  let exp = "";
  const pushExpToToken = () => {
    if (exp) {
      token.push({ type: "EXPRESSION", value: exp });
      exp = "";
    }
  };
  for (let i = 0; i < str.length; i += 1) {
    switch (str[i]) {
      case "(":
        pushExpToToken();
        token.push({ type: "LBRAC", value: str[i] });
        break;
      case ")":
        pushExpToToken();
        token.push({ type: "RBRAC", value: str[i] });
        break;
      case "|":
        pushExpToToken();
        token.push({ type: "OR", value: "||" });
        i += 1;
        break;
      case "&":
        pushExpToToken();
        token.push({ type: "AND", value: "&&" });
        i += 1;
        break;
      case "!":
        if (str[i + 1] !== "=") {
          token.push({ type: "NOT", value: "!" });
        } else {
          exp += str[i];
        }
        break;
      default:
        exp += str[i];
        break;
    }
  }
  return token;
};

module.exports = Tokenizer;
