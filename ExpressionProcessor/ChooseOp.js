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
      let temp = value.split(",");
      result = String(temp.includes(dataField));
      break;
    case "<array-contains>":
      let holder = String(data[field]).split(",");
      result = String(holder.includes(removal(value)));
      break;
    case "<begins-with>":
      result = String(dataField.startsWith(value));
      break;
    case "<ends-with>":
      result = String(dataField.endsWith(value));
      break;
    case "<matches-regex>":
      const regex = new RegExp(value);
      result = String(regex.test(dataField));
      break;
    default:
      throw "Error code: ChooseOpNotFound. '\n' Please recheck this case again! No operators can be found!";

      result = "false";
  }
  return result;
};

module.exports = ChooseOp;
