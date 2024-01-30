// ------------------------------------------------
// author: @github.com/akashchouhan16
// ------------------------------------------------

/** @type {import("jest").Config} */

const config = {
    displayName: {
        name: "Unit Tests Suite Jest",
        color: "cyan"
    },
    verbose: true,
    bail: 1,
    forceCoverageMatch: ["**/*.test.js"],
    testEnvironment: "node",
}

module.exports = config