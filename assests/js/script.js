const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzawg7BGsyNJXJT8d8ZErb13VHvtNlYgSzhUm9mz4O62ZQ-kqsIML94yB3o1e1thk9f/exec";

const form = document.forms["contact-form"];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the value of the "Name" field
  let nameValue = document.querySelector('input[name="Name"]').value.trim();
  // Correct the format of the name (capitalize each first letter)
  let correctedName = nameValue.toLowerCase().replace(/\b\w/g, function (char) {
    return char.toUpperCase();
  });
  // Set the corrected name value to the hidden "CustomerName" field
  document.getElementById("CustomerName").value = correctedName;

  // Get the value of the "Catagory" field
  let catagoryValue = document.getElementById("Catagory").value;
  // Set the value of the "DateOfBirth" field based on the "Catagory" value
  let dateOfBirthValue =
    catagoryValue === "General Services" ? "Not Required" : "Bending";
  document.getElementById("DateOfBirth").value = dateOfBirthValue;

  // Set the value of the "Follow Up" field based on the "Catagory" value
  let followUpValue = catagoryValue === "General Services" ? "No" : "Yes";
  document.getElementById("FollowUp").value = followUpValue;

  // Set the value of the "Qualifications" field based on the "Catagory" value
  // let qualificationsValue =
  //   catagoryValue === "Job Application Support Services"
  //     ? "Bending"
  //     : "Not Required";
  // document.getElementById("Qualifications").value = qualificationsValue;

  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      alert("Thank you! your form is submitted successfully.");
      // Clear the Customer Name and Phone fields
      document.querySelector('input[name="Name"]').value = "";
      document.querySelector('input[name="Mobile Number"]').value = "";
    })
    // .then(() => {
    //   window.location.reload();
    // })
    .catch((error) => console.error("Error!", error.message));
  alert("Thank you! your form is submitted successfully.");
});
