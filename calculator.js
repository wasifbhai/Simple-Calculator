function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const operator = document.getElementById("operator").value;
    const num2 = parseFloat(document.getElementById("num2").value);
  
    let equationText = "";
  
    if (!isNaN(num1) && operator && !isNaN(num2)) {
      let result;
  
      switch (operator) {
        case "add":
          result = num1 + num2;
          break;
        case "subtract":
          result = num1 - num2;
          break;
        case "multiply":
          result = num1 * num2;
          break;
        case "divide":
          result = num1 / num2;
          break;
        default:
          result = "Invalid operator";
      }
  
      equationText = num1 + " " + getOperatorSymbol(operator) + " " + num2 + " = " + result;
    } else {
      equationText = "";
    }
  
    document.getElementById("result-text").textContent = equationText;
  }
  
  function getOperatorSymbol(operator) {
    switch (operator) {
      case "add":
        return "+";
      case "subtract":
        return "-";
      case "multiply":
        return "*";
      case "divide":
        return "/";
      default:
        return "";
    }
  }