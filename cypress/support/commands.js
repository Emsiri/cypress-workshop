// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("fillRegistrationFormAndSubmit", userDetails => {
	cy.get("#signup_email").type(userDetails.email);
	cy.get("#signup_password").type(userDetails.password);
	cy.get("#signup_first_name").type(userDetails.firstName);
	cy.get("#signup_last_name").type(userDetails.lastName);
	cy.get("#dob_day").select("01");
	cy.get("#dob_month").select("01");
	cy.get("#dob_year").select("1988");
	cy.get("#address_autocomplete").type(userDetails.streetAddress);
	cy.getByDataId("addressAutoComplete_suggestionText")
		.first()
		.click();
	cy.get("#signup_phone").type(userDetails.phone);
	cy.get("#signup_agree_checkbox_button").click();
	// cy.wait(500);
	cy.get("#signup_form").submit();
});
Cypress.Commands.add("getByDataId", dataId => {
	cy.get(`[data-id='${dataId}']`);
});