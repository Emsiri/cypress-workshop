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

const time = Date.now();
const email = `michelles${time}@benon.com`

describe("Registration", () => {
	it("should register new customer", () => {
		cy.visit("/");
		cy.get("#header_login_button").click();
		cy.get("#loginFormContainer_registerLink").click();
		cy.get("#signup_email").type(email);
		cy.get("#signup_password").type('go4jumbo');
		cy.get("#title").select('Ms');
		cy.get("#signup_first_name").type('Michelle');
		cy.get("#signup_last_name").type('Test');
		cy.get("#dob_day").select('1');
		cy.get("#dob_month").select('January');
		cy.get("#dob_year").select('2001');
		cy.get("#address_autocomplete").type('1');
		cy.get("[data-id='addressAutoComplete_suggestion']").first().click();
		cy.get("#signup_phone").type('0411200100');
		cy.get("#signup_agree").check({ force: true });
		cy.get("[data-id='signup_submit_button']").click();
		cy.wait(2000);
		cy.url().should('include', '/my-account');
		cy.get("#nav_logout_link").click();
	});
});

describe("Login after successful registration", () => {
	it("should be able to login new customer", () => {
		cy.visit("/");
		cy.get("#header_login_button").click();
		cy.get("#dynamic_customer_login_form_email").type(email);
		cy.get("#dynamic_customer_login_form_password").type('go4jumbo');
		cy.get("[data-id='dynamic_customer_login_form_submitButton']").click();
		cy.wait(2000);
		cy.get("#nav_logout_link").should('exist');
	});
})