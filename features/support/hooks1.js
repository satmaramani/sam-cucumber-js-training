const {
  Before,
  BeforeAll,
  BeforeStep,
  After,
  AfterAll,
  AfterStep,
} = require("@cucumber/cucumber");

BeforeAll(function () {
  console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@");
  console.log("Before all scenarios");
});

Before(function (scenario) {
  console.log(`Before scenario: ${scenario.pickle.name}`);
});

BeforeStep(function (stepResult) {
  if (stepResult.pickleStep.text) {
    console.log(`Before step: ${stepResult.pickleStep.text}`);
  } else {
    console.log("Before step: No text");
  }
});

AfterStep(function (stepResult) {
  if (stepResult.pickleStep.text) {
    console.log(`After step: ${stepResult.pickleStep.text}`);
  } else {
    console.log("After step: No text");
  }
});

After(function (scenario) {
  console.log(`After scenario: ${scenario.pickle.name}`);
});

AfterAll(function () {
  console.log("After all scenarios");

  console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$");
});
