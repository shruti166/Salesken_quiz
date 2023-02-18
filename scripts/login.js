let user = JSON.parse(localStorage.getItem("user")) || [];

//Login functionality

const logIn = () => {
  event.preventDefault();
  let email = document.getElementById("uname").value;
  let password = document.getElementById("password").value;

  let ans = false;
  if (email == "" || password == "") {
    alert("Please enter correct details");
  } else {
    for (let i = 0; i < user.length; i++) {
      if (user[i].Email == email && user[i].Password == password) {
        ans = true;
      }
    }
    if (ans == true) {
      alert("login sccessfull !");
      location = "quiz.html";
    } else {
      alert("Wrong Credentials");
    } 
  }
};
