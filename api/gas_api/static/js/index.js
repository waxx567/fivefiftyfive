const button = document.querySelector("input");

button.addEventListener("click", updateButton);

function updateButton() {
  if (button.value === "Not selected") {
    button.value = "Selected";
  } else {
    button.value = "Not selected";
  }
}
