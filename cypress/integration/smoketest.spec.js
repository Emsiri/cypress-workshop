/// <reference types="Cypress" />

// describe block is the first thing you'll add to every test.
// All test code needs to be included within the describe block
// A description is necessary as Cypress uses this to name your test
describe("Smoke test.", () => {
	// It blocks can be thought of as individual test scenarios within tests
	// Also needs a description
	it("should display the home page", () => {
		// All cypress comands start with cy
		// visit loads the URL within the braces and waits for the page to fully load before continuing
		cy.visit("https://www.ozlotteries.com/");
		// Assertion on what text the h1 contains
		cy.title().should("contain", "Oz Lotteries");
	});
});
