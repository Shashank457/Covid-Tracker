function show() {
  document.getElementById("visible3").style.visibility = "hidden";
  document.getElementById("visible2").style.visibility = "hidden";
  // document.getElementById("visible1").classList.add("active");
  document.getElementById("visible1").style.visibility = "visible";
}
function show2() {
  document.getElementById("visible3").style.visibility = "hidden";
  document.getElementById("visible1").style.visibility = "hidden";
  document.getElementById("visible2").style.visibility = "visible";
}
function show3() {
  document.getElementById("visible2").style.visibility = "hidden";
  document.getElementById("visible1").style.visibility = "hidden";
  document.getElementById("visible3").style.visibility = "visible";
}
