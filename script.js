function updateName() {
  const name = document.getElementById("nameField").value;
  const guestElem = document.getElementById("guestName");

  if (name.trim() !== "") {
    guestElem.textContent = `Dear ${name}`;
  } else {
    guestElem.textContent = "Dear Guest";
  }
}
