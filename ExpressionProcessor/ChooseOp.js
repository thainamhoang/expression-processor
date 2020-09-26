const ChooseOp = (data, field, operator, value) => {
  const removal = (str) => {
    str = String(str).replace(/\s/g, "");
    return str;
  };

  let result = "";
  let dataField = removal(data[field]);
  switch (operator) {
    case "==":
      result = String(dataField == value);
      break;
    case "!=":
      result = String(dataField != value);
      break;
    case ">=":
      result = String(dataField >= value);
      break;
    case "<=":
      result = String(dataField <= value);
      break;
    case ">":
      result = String(dataField > value);
      break;
    case "<":
      result = String(dataField < value);
      break;
    case "<contains>":
      result = String(dataField.includes(value));
      break;
    case "<in>":
      result = String(value.split(",").includes(dataField));
      break;
    case "<array-contains>":
      result = String(String(data[field]).split(",").includes(removal(value)));
      break;
    case "<begins-with>":
      result = String(dataField.startsWith(value));
      break;
    case "<ends-with>":
      result = String(dataField.endsWith(value));
      break;
    case "<matches-regex>":
      result = String(new RegExp(value).test(dataField));
      break;
    default:
      result = "false";
      throw "Error code: ChooseOpNotFound. '\n' Please recheck this case again! No operators can be found!";
  }
  return result;
};

module.exports = ChooseOp;
