var credentialDatabase = [
  {
    username: "brad",
    password: "password1"
  },
  {
    username: "robot",
    password: "123"
  },
  {
    username: "humanoid",
    password: "secret"
  }
];

var newsfeed = [
  {
    username: "Bob",
    timeline: "I love Javascript!"
  },
  {
    username: "Grant",
    timeline: "I'm having a great day programming."
  },
  {
    username: "Douglas",
    timeline: "Tired from all this learning!"
  }
];

function isUserValid(username, password) {
  for (var i = 0; i < credentialDatabase.length; i++) {
    if (credentialDatabase[i].username == username && credentialDatabase[i].password == password) {
      return true;
    }
  }
  return false;
}

function signIn(username, password) {
  if (isUserValid(username, password)) {
    console.log(newsfeed);
  } else {
    alert("Sorry, wrong username and password. Please try again!");
  }
}

var usernamePrompt = prompt("What\'s your username?");
var passwordPrompt = prompt("What\'s your password?");

signIn(usernamePrompt, passwordPrompt);