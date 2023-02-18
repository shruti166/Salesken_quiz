//storing user Info in local storage with key("user");
let userData = JSON.parse(localStorage.getItem("user")) || [];

const signUp = () => {
  event.preventDefault();  
  let name = document.getElementById("name").value;
  let email = document.getElementById("uname").value;
  let Password = document.getElementById("password").value;

  console.log(name);

  let flg = 0; 
  userData.map(function (elm) {
    if (elm.Email == email && elm.Email != "") {
      flg = 1; //user already exists
    }
  });
  if (flg == 0) {
    if (name == "" || email == "" || Password == "") {
      alert("Please enter details");
    } else {
      let user = {
        Name: name,
        Email: email,
        Password: Password,
      };

      userData.push(user);
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Sign Up successfull!");
    }
  } else {
    alert("Account alredy exist\n Try to login"); //flag = 0
  }
};
