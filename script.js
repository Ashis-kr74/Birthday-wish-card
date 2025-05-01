// Ask for name when page loads
window.onload = function () {
  const name = prompt("Whose birthday is it?");
  const nameDisplay = name ? name : "Friend";

  document.getElementById("personName").textContent = nameDisplay;
  document.getElementById("nameInside").textContent = nameDisplay;

  // Reveal the card with animation
  document.getElementById("birthdayCard").classList.remove("hidden");
};

function openCard() {
  document.getElementById("cardInside").style.display = "block";
}
