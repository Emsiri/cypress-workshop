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
		// cy.get("#signup_email").type(userDetails.email);
		// cy.get("#signup_password").type(userDetails.password);
		// cy.get("#signup_first_name").type(userDetails.firstName);
		// cy.get("#signup_last_name").type(userDetails.lastName);
		// cy.get("#dob_day").select("01");
		// cy.get("#dob_month").select("01");
		// cy.get("#dob_year").select("1988");
		// cy.get("#address_autocomplete").type(userDetails.streetAddress);
		// cy.get("[data-id='addressAutoComplete_suggestionText']")
		// 	.first()
		// 	.click();
		// cy.get("#signup_phone").type(userDetails.phone);
		// cy.get("#signup_agree_checkbox_button").click();
		// cy.get("#signup_form").submit();
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
