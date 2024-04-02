const scriptURL =
  "https://script.google.com/macros/s/AKfycbw-ncyxGI02TwbKEV-qi_4Byo9I_GTEuoiV3uhiKzLSlSpPS4mUy2YHELDTUFlBRcoP/exec";

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
