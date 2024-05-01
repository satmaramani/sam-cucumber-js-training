const { Given, When, Then } = require("@cucumber/cucumber");

Given("a user navigates to the registration page", function () {
  console.log("This is world Parameter => ", this.appUrl);
  // Implementation for navigating to the registration page
});

When("the user fills in the registration form with valid details", function () {
  // Implementation for filling in the registration form with valid details
});

Then("the user should see a success message", function () {
  // Implementation for verifying the success message
});

When(
  "the user fills in the registration form with an invalid email",
  function () {
    // Implementation for filling in the registration form with an invalid email
  }
);

Then("the user should see an error message", function () {
  // Implementation for verifying the error message
});

When(
  "the user fills in the registration form with a weak password",
  function () {
    // Implementation for filling in the registration form with a weak password
  }
);
