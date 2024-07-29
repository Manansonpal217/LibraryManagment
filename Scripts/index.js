console.log("Manan");
function showTab(tabName) {
  console.log("showTab");
  var tabs = document.getElementsByClassName("tab-content");
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].style.display = "none";
  }
  document.getElementById(tabName).style.display = "block";
}

function login() {
  let userData = JSON.parse(localStorage.getItem("user_data")) || [];
  var email = document.getElementById("loginEmail").value;
  var password = document.getElementById("loginPassword").value;
  console.log(email, password);
  let loggedIn_user = userData.filter((profile) => {
    return profile.Email == email && profile.Password == password;
  });
  console.log(loggedIn_user);

  if (loggedIn_user.length > 0) {
    redirect(email);
  } else {
    alert("User Not found");
  }
  // Add your login logic here
  //   alert("Login button clicked");
}

function signup(event) {
  console.log("Here");
  let userData = JSON.parse(localStorage.getItem("user_data")) || [];
  var name = document.getElementById("signupName").value;
  var email = document.getElementById("signupEmail").value;
  var password = document.getElementById("signupPassword").value;
  var gender = document.getElementById("signupGender").value;
  // Simple client-side validation

  filterEmail = userData.filter((profile) => profile.Email === email);
  if (filterEmail.length > 0) {
    alert("User already exists");
  } else {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    var passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{9,}$/;

    if (!name.trim() || !email.trim() || !password.trim() || !gender.trim()) {
      alert("Please fill in all fields.");
    } else if (!emailRegex.test(email)) {
      alert("Invalid email format");
    } else if (!passwordRegex.test(password)) {
      alert(
        "Password should be at least 9 characters long and include at least one letter and one special character"
      );
    } else {
      var newData = {
        Name: name,
        Email: email,
        Gender: gender,
        Password: password,
        Books: { Rent: [], Bought: [] },
      };

      userData.push(newData); // Append data to the array
      localStorage.setItem("user_data", JSON.stringify(userData)); // Use consistent key
      // Add your signup logic here
      document.getElementById("signupName").value = "";
      document.getElementById("signupEmail").value = "";
      document.getElementById("signupPassword").value = "";
      document.getElementById("signupGender").value = "male";

      redirect(email);
    }
  }
}

function redirect(email) {
  window.location.href = `afterLogin.html?email=${email}`;
}

//   showTab("login"); // Show login tab by default
