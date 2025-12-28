function submitDoubt() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let subject = document.getElementById("subject").value;
  let doubt = document.getElementById("doubt").value;

  if (name === "" || email === "" || subject === "" || doubt === "") {
    alert("Please fill all fields");
    return;
  }

  firebase.database().ref("doubts").push({
    name: name,
    email: email,
    subject: subject,
    doubt: doubt
  });

  alert("Doubt submitted successfully!");

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("subject").value = "";
  document.getElementById("doubt").value = "";
}
  