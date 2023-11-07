document.getElementById("calc").addEventListener("submit", function (event) {
  event.preventDefault();
  const a = document.getElementById("a").value;
  const b = document.getElementById("b").value;
  const c = document.getElementById("c").value;

  var D = b ** 2 - 4 * a * c;

  let result;
  let result2;
  if (D > 0) {
    var x1 = ((-b - Math.sqrt(D)) / (2 * a)).toFixed(2);
    var x2 = ((-b + Math.sqrt(D)) / (2 * a)).toFixed(2);
    result = `x1 = ${x1}`;
    result2 = `x2 = ${x2}`;
  } else if (D === 0) {
    var x = (-b / (2 * a)).toFixed(2);
    result = `x = ${x}`;
  } else {
    result = "The equation admits no solution";
  }
  const answer = document.getElementById("answer").innerHTML;
  const answer2 = document.getElementById("answer2").innerHTML;
  answer = result;
  if (result2) {
    answer2 = result2;
  } else {
    answer2 = null;
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
