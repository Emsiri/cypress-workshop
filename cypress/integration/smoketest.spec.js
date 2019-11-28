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
		cy.visit("/");
		// Assertion on what text the h1 contains
		cy.title().should("contain", "Oz Lotteries");
		cy.get('#header_login_button').click();
		cy.title().should("contain", "Oz Lotteries");
		cy.get('h2').should("contain", "Member Login");
		cy.get('#loginFormContainer_registerLink').click();
		cy.get('h2').should("contain", "Register");
		cy.get('input#signup_email').type('112233@144.com');
		cy.get('input#signup_password').type('1122W33ccQ144com');
		cy.get('select#title').select('Mr');
		cy.get('input#signup_first_name').type('Alan');
		cy.get('input#signup_last_name').type('Lllol');
		cy.get('select#dob_day').select('11');
		cy.get('select#dob_month').select('11');
		cy.get('select#dob_year').select('1991');
		cy.get('input#address_autocomplete').type('32');
		cy.get('.addressAutocomplete__suggestion--1M-tn').first().click();
		cy.get('input#address_autocomplete').should("have.include.value", "32 Cordelia Street");
		cy.get('input#signup_phone').type('321123321');
		cy.get('#signup_agree_checkbox_button').click();
		cy.get('[data-id="signup_submit_button"]').click();
	});

	//login block
	it("should display the home page", () => {
		// All cypress comands start with cy
		// visit loads the URL within the braces and waits for the page to fully load before continuing
		cy.visit("/");
		// Assertion on what text the h1 contains
		cy.title().should("contain", "Oz Lotteries");
		cy.get('#header_login_button').click();
		cy.title().should("contain", "Oz Lotteries");
		cy.get('h2').should("contain", "Member Login");
		cy.get('input#dynamic_customer_login_form_email').type('112233@144.com');
		cy.get('input#dynamic_customer_login_form_password').type('1122W33ccQ144com');
		cy.get('[data-id="dynamic_customer_login_form_submitButton"]').click();
	});
});
