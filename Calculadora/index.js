function somar() {
  var tn1 = window.document.getElementById("txtn1");
  var tn2 = window.document.querySelector("input#txtn2");
  var res = window.document.getElementById("res");
  var n1 = Number(tn1.value);
  var n2 = Number(tn2.value);
  var s = n1 + n2;
  res.innerHTML = `The value of adding up ${n1} and ${n2} is equal to ${s}.`;
}
function subtrair() {
  var tn3 = window.document.getElementById("txtn3");
  var tn4 = window.document.querySelector("input#txtn4");
  var res2 = window.document.getElementById("res2");
  var n3 = Number(tn3.value);
  var n4 = Number(tn4.value);
  var s2 = n3 - n4;
  res.innerHTML = `The value of decreasing ${n3} by ${n4} is equal to ${s2}.`;
}
function multiplicar() {
  var tn5 = window.document.getElementById("txtn5");
  var tn6 = window.document.querySelector("input#txtn6");
  var res3 = window.document.getElementById("res3");
  var n5 = Number(tn5.value);
  var n6 = Number(tn6.value);
  var s3 = n5 * n6;
  res.innerHTML = `The value of multiplying ${n5} by ${n6} is equal to ${s3}.`;
}
function dividir() {
  var tn7 = window.document.getElementById("txtn7");
  var tn8 = window.document.querySelector("input#txtn8");
  var res4 = window.document.getElementById("res4");
  var n7 = Number(tn7.value);
  var n8 = Number(tn8.value);
  var s4 = n7 / n8;
  res.innerHTML = `The value of dividing ${n7} by ${n8} is equal to ${s4}.`;
}
