function navButton() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

function ValidateAndCalculate() {
  if (document.forms["form"]["name"].value == "" || document.forms["form"]["details"].value == "") {
    alert("Please fully fill out the form.");
    return false;
  } else { alert("Thank you for your input!"); }
}

function validateForm() {
  if (document.forms["form"]["name"].value == "" || document.forms["form"]["details"].value == "" || document.forms["form"]["email"].value == "" || document.forms["form"]["phoneNumber"].value == "" || document.getElementById("details").value.length < 5) {
    alert("Please fully fill out the form.");
    return false;
  } else { alert("Thank you for your input!"); }
}