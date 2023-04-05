const form = document.getElementById("rating-container");
const choice = document.getElementById("choice");
const submitted = document.getElementById("submitted");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  let output = "";

  for (const entry of data) {
    output = entry[1];
  }

  if (output >= 1) {
    choice.textContent = output;
    form.classList.add("rating--disable");
    submitted.classList.remove("rating--disable");
  } else {
    alert("You must choose a number.");
  }
});
