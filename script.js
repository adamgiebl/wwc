const qs = (s) => document.querySelector(s);
const topInput = qs("#firstnumber");
const bottomInput = qs("#secondnumber");
const results = qs("#results");
const operatorInput = qs("#operator");
const doRound = qs("#doround");
const decimalsSelect = qs("#decimals");
qs("#calculate").addEventListener("click", () => {
  let res = eval(topInput.value + operatorInput.value + bottomInput.value);
  res = doRound.checked ? parseFloat(res).toFixed(decimalsSelect.value) : res;
  topInput.value = res;
  results.innerHTML += `<li>${res}</li>`;
  results.scrollTop = results.scrollHeight;
});
qs("#clear").addEventListener("click", () => (results.innerHTML = ""));
