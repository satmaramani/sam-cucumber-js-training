const { Given, When, Then } = require("@cucumber/cucumber");

Given("the user is on the login page", function () {
  // Code to navigate to the login page
});

When(
  "the user enters their username {string} and password {string} and {string}",
  function (username, password, other) {
    console.log(
      ` Username is ${username} and password is ${password} and other is ${other} `
    );
    // Code to enter username and password in login form
  }
);

When("the user clicks the login button", function () {
  // Code to click on the login button
});

Then("the user should be redirected to the dashboard", function () {
  // Code to verify redirection to the dashboard
});
