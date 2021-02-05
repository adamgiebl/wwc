const qs = (s) => document.querySelector(s);
const topInput = qs("#firstnumber");
const bottomInput = qs("#secondnumber");
const results = qs("#results");
const operatorInput = qs("#operator");
const roundingCheckbox = qs("#doround");
const decimalsSelect = qs("#decimals");
qs("#calculate").addEventListener("click", () => {
  const operator = operatorInput.value;
  let res = eval(topInput.value + operator + bottomInput.value);
  if (roundingCheckbox.checked) {
    res = parseFloat(res).toFixed(decimalsSelect.value);
  }
  topInput.value = res;
  const li = document.createElement("li");
  li.textContent = res;
  results.appendChild(li);
  results.scrollTop = results.scrollHeight;
});

qs("#clear").addEventListener("click", () => {
  results.innerHTML = "";
});
