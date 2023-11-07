const toggleSwitch = document.getElementById("toggle");
function toScientificNotation(number) {
  // Handle the case where the number is 0 separately
  if (number === 0) {
    return "0";
  }

  const exponent = Math.floor(Math.log10(Math.abs(number)));
  const coefficient = number / Math.pow(10, exponent);
  let toreturn;
  if (exponent !== 0) {
    toreturn = `${coefficient} * 10^${exponent}`;
  } else {
    toreturn = number;
  }
  return toreturn;
}

function getnum(num) {
  let toreturn;
  if (toggleSwitch.checked) {
    toreturn = toScientificNotation(num);
  } else {
    toreturn = num;
  }
  return toreturn;
}

document.getElementById("calc").addEventListener("submit", function (event) {
  event.preventDefault();
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;
  console.log(`a = ${a}\nb = ${b}\nc = ${c}`);
  try {
    var D = b ** 2 - 4 * a * c;
    let result;
    let result2;
    if (D > 0) {
      var x1 = (-b - Math.sqrt(D)) / (2 * a);
      var x2 = (-b + Math.sqrt(D)) / (2 * a);
      result = `x1 = ${getnum(x1)}`;
      result2 = `x2 = ${getnum(x2)}`;
    } else if (D === 0) {
      var x = -b / (2 * a);
      result = `x = ${getnum(x)}`;
    } else {
      result = "The equation admits no solution";
    }
    const answer = document.getElementById("answer");
    const answer2 = document.getElementById("answer2");
    answer.innerHTML = result;
    if (result2) {
      answer2.innerHTML = result2;
    } else {
      answer2.innerHTML = null;
    }
  } catch (error) {
    console.error(error);
  }
});

const inputFields = document.getElementsByClassName("input-nums");

for (let i = 0; i < inputFields.length; i++) {
  inputFields[i].addEventListener("input", function () {
    const value = this.value;
    const valueLength = value.length;
    if (valueLength > 25) return;
    const newWidth = Math.max(50, valueLength * 5);
    this.style.width = newWidth + "px";
  });
}
