/// <reference types="Cypress" />

describe("Register and login test", () => {
	it("should Register correctly", () => {
		cy.visit("/");
		cy.title().should("contain", "Oz Lotteries");
		cy.get("#header_login_button").click();
		cy.get("#loginFormContainer_registerLink").click();
		cy.url().should("contain", "signup");
		cy.get("#signup_email").type("bradf+7@benon.com");
		cy.get("#signup_password").type("4Me2Test");
		cy.get("#signup_first_name").type("Brad");
		cy.get("#signup_last_name").type("Forrest");
		cy.get("#dob_day").select("01");
		cy.get("#dob_month").select("01");
		cy.get("#dob_year").select("1988");
		cy.get("#address_autocomplete").type("488 George st");
		cy.get("[data-id='addressAutoComplete_suggestionText']")
			.first()
			.click();
		cy.get("#signup_phone").type("0400 000 000");
		cy.get("#signup_agree_checkbox_button").click();
		cy.get("#signup_form").submit();
	});
	it("should login correctly", () => {
		cy.visit("/");
		cy.get("#header_login_button").click();
		cy.get("#dynamic_customer_login_form_form").within(() => {
			cy.get("#dynamic_customer_login_form_email").type("bradf+7@benon.com");
			cy.get("#dynamic_customer_login_form_password").type("4Me2Test");
			cy.get("[data-id='dynamic_customer_login_form_submitButton']").click();
		})
		cy.get("#nav_logout_link");
	})
});
