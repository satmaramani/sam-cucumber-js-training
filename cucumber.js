module.exports = {
  default: {
    parallel: 2,
    retry: 10,
    format: ["html:cucumber-report.html"],
    worldParameters: { appUrl: "http://localhost:3000/" },
    // format: ["progress-bar", ["html", "cucumber-report.html"]],
    // paths: ["features/greetings.feature"],
    // dryRun: true,
  },
  mobile: {
    parallel: 3,
    retry: 3,
    format: ["html:cucumber-report.html"],
    worldParameters: { appUrl: "http://localhost:3000/" },
  },
  web: {
    parallel: 5,
    format: ["json:cucumber-report.json"],
    worldParameters: { appUrl: "http://localhost:3000/" },
  },
};
