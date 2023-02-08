let buttons = document.querySelectorAll("input");
var number = 0;
var button_submit = document.getElementById("button-submit");
var rating_container = document.getElementById("rating-container");

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    buttons.forEach((btn) => btn.classList.remove("circle--active"));
    this.classList.add("circle--active");
    number = button.value;
  });
});

button_submit.addEventListener("click", function () {
  if (number > 0) {
    rating_container.style.alignItems = "center";
    rating_container.innerHTML = `
    <span class="rating__img">
        <object
            data="./images/illustration-thank-you.svg"
            type="image/svg+xml"
            title="Icon Star">
        </object>
    </span>
    <span class="rating__choice">
        You selected ${number} out of 5
    </span>
    <h1 class="rating__title">
        Thank you!
    </h1>
    <p class="rating__paragraph rating__paragraph--center">
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
    </p>
  `;
  }
});
