const express = require("express");
const fetch = require("node-fetch");
const app = express();

app.use(express.json());

app.get("/proxy", async (req, res) => {
  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbw-ncyxGI02TwbKEV-qi_4Byo9I_GTEuoiV3uhiKzLSlSpPS4mUy2YHELDTUFlBRcoP/exec"
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

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
