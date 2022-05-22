function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    document.myform.em.focus();
    return true;
  } else {
    alert("You have entered an invalid email address!");
    document.myform.em.focus();
    return false;
  }
}
function validate() {
  if (document.forms["myform"]["na"].value == "") {
    alert("Enter name");
  }
  if (document.forms["myform"]["em"].value == "") {
    alert("Enter email");
  }
  if (document.forms["myform"]["no"].value == "") alert("Enter phone number");
  if (isNaN(document.forms["myform"]["no"].value)) {
    alert("Enter numeric values only for phone number");
  }
  if (document.forms["myform"]["ns"].value == "") {
    alert("Enter event type");
  }
  if (document.forms["myform"]["nsa"].value == "") {
    alert("Enter event date");
  }
  if (document.forms["myform"]["name"].value == "") {
    alert("Enter message");
  }
}
