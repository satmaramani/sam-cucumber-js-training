const { Given, When, Then } = require("@cucumber/cucumber");

Given("the user has an initial balance of ${int}", function (initialBalance) {
  // Store the initial balance in the world object
  this.initialBalance = initialBalance;
});

Then("the user deposits ${int}", function (amount) {
  // Access the initial balance from the world object
  const initialBalance = this.initialBalance;
  // Calculate the final balance
  const finalBalance = initialBalance + amount;
  // Store the final balance in the world object
  this.finalBalance = finalBalance;
});

Then("the user withdraws ${int}", function (amount) {
  // Access the final balance from the world object
  let finalBalance = this.finalBalance;
  // Update the final balance
  finalBalance -= amount;
  // Update the final balance in the world object
  this.finalBalance = finalBalance;
});

Then(
  "the user should have a remaining balance of ${int}",
  function (expectedBalance) {
    // Access the final balance from the world object
    const actualBalance = this.finalBalance;
    // Compare actual balance with expected balance
    if (actualBalance !== expectedBalance) {
      throw new Error(
        `Expected balance: ${expectedBalance}, Actual balance: ${actualBalance}`
      );
    }
  }
);
