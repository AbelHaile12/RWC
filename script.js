
function subscribe(plan) {
    alert("Redirecting to Stripe checkout for " + plan + " plan.");
}
function showFeature() {
  const selected = document.getElementById("featureSelect").value;
  const boxes = document.getElementsByClassName("feature-box");

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.display = "none";
  }

  if (selected !== "none") {
    document.getElementById(selected).style.display = "block";
  }
}
