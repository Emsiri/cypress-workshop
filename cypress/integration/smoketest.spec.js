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
	});
});

describe("test", () => {
	const email = 'email1@email.com';
	const password = 'password123';

	it('Should register', () => {
		cy.visit("/");
		cy.get('#header_login_button').click();
		cy.get('#loginFormContainer_registerLink').click();
		cy.get('#signup_email').type(email);
		cy.get('#signup_password').type(password);
		cy.get('#signup_first_name').type('john');
		cy.get('#signup_last_name').type('smith');
		cy.get('#dob_day').select('01');
		cy.get('#dob_month').select('01');
		cy.get('#dob_year').select('2000');
		cy.get('#address_autocomplete').type('123 Eagle Street');
		cy.get('#signup_suburb').type('Brisbane City');
		cy.get('#signup_state').type('QLD');
		cy.get('#signup_postcode').type('4000');
		cy.get('#country').select('AU');
		cy.get('#signup_phone').type('0412345678');
		cy.get('#signup_agree').check({force: true});
		cy.get('[data-id=signup_submit_button]').click();

		cy.get("#nav_logout_link").should("exist");
	});

	it('Should sign-in', () => {
		cy.visit("/");
		cy.get('#header_login_button').click();
		cy.get('#dynamic_customer_login_form_email').type(email);
		cy.get('#dynamic_customer_login_form_password').type(password);
		cy.get('[data-id=dynamic_customer_login_form_submitButton]').click();
		
		cy.get("#nav_logout_link").should("exist");
	});
});
