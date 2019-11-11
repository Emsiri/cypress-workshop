/// <reference types="Cypress" />

describe("Smoke test.", () => {
	it("should display the home page", () => {
		cy.visit("https://www.ozlotteries.com/");
		cy.title().should("contain", "Oz Lotteries");
	});
});
