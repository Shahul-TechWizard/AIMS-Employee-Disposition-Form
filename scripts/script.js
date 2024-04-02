const scriptURL =
  "https://script.google.com/macros/s/AKfycbzo_QPt677EZiQpy8xlYJG0xBwmRZiMvHS6euxZtvSBmjgiqdef1J1wh8p-3ALFzRwk/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) =>
      alert("Thank you! your form is submitted successfully.")
    )
    .then(() => {
      window.location.reload();
    })
    .catch((error) => console.error("Error!", error.message));
});
