// Require yo-yo
var yo = require('yo-yo');

// Load/create a database of users
var Datastore = require('nedb')
  , db = new Datastore({filename: './Users.dat', autoload: true})


var haveUsers = true;

var welcomeDiv = document.getElementById('welcome-message');
var noUsersMessage = yo`<p class="centered">Create a new user account to get started.</p>`;
var haveUsersMessage = yo`<p class="centered">Select an account or create a new one to get started.</p>`;


// Check if we have users and append the welcome message accordingly
if (haveUsers) {
  welcomeDiv.appendChild(haveUsersMessage);
} else {
  welcomeDiv.appendChild(noUsersMessage);
}


// Attach event listener to create-account button
var createAccountButton = document.getElementById('create-account');
createAccountButton.addEventListener('click', function(){
  createUser();
});

function createUser() {
  console.log('Creating Account')

  // pop up a modal dialog for user info input
    // Name
    // Save file location
    // Load backup file
}
