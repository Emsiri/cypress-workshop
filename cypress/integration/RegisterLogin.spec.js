/// <reference types="Cypress" />

import faker from "faker";

function createNewUserDetails() {
	const email = `test_${Date.now()}@benon.com`;

	return {
		firstName: faker.name.firstName(),
		lastName: faker.name.lastName(),
		password: "4Me2Test",
		streetAddress: "488 George Street",
		phone: faker.phone.phoneNumber(),
		email
	};
}
const userDetails = createNewUserDetails();

describe("Register and login test", () => {
	it("should Register correctly", () => {
		cy.visit("/");
		cy.title().should("contain", "Oz Lotteries");
		cy.get("#header_login_button").click();
		cy.get("#loginFormContainer_registerLink").click();
		cy.url().should("contain", "signup");
		cy.fillRegistrationFormAndSubmit(userDetails);
	});
	it("should login correctly", () => {
		cy.visit("/");
		cy.get("#header_login_button").click();
		cy.get("#dynamic_customer_login_form_form").within(() => {
			cy.get("#dynamic_customer_login_form_email").type(userDetails.email);
			cy.get("#dynamic_customer_login_form_password").type(userDetails.password);
			cy.get("[data-id='dynamic_customer_login_form_submitButton']").click();
		})
		cy.get("#nav_logout_link");
	})
});
