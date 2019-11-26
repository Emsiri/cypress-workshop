/// <reference types="Cypress" />

describe("Home page tests", () => {
	it("Should register a new user account", () => {
		cy.visit("/");
		cy.get('[id="header_login_button"]').click();
		cy.get('[id="loginFormContainer_registerLink"]').click();
		cy.get('[id="signup_email"]').type('edgar_allan_bro@yahoo.com');
		cy.get('[id="signup_password"]').type('nevermore123rofl');
		cy.get('[id="signup_first_name"]').type('Edgar Allan');
		cy.get('[id="signup_last_name"]').type('Poe');
		cy.get('[id="dob_day"]').select('18');
		cy.get('[id="dob_month"]').select('January');
		cy.get('[id="dob_year"]').select('1914');
		cy.get('[id="address_autocomplete"]').type('77 Raven Street');
		cy.get('[id="signup_suburb"]').type('Camp Hill');
		cy.get('[id="signup_state"]').type('QLD');
		cy.get('[id="signup_postcode"]').type('4152');
		cy.get('[id="signup_phone"]').type('0400 000 000');
		cy.get('[id="signup_agree_checkbox_button"]').click();
		cy.get('[data-id="signup_submit_button"]').click();
	});

	it("Should log in using an existing user account", () => {
		cy.visit("/");
		cy.get('[id="header_login_button"]').click();
		cy.get('[id="dynamic_customer_login_form_email').type('edgarallanpoe@yahoo.com');
		cy.get('[id="dynamic_customer_login_form_password"]').type('nevermore123');
		cy.get('[data-id="dynamic_customer_login_form_submitButton"]').click();
	});
});


