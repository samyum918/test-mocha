module.exports = {
  reporter: "mochawesome",
  timeout: 10000,
  "reporter-option": [
    "reportFilename=regression-test-report_[datetime]",
    "overwrite=true",
    "charts=true",
    "inline=true",
    "saveJson=false",
  ],
};
