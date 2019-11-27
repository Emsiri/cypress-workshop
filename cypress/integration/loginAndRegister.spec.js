/// <reference types="Cypress" />

describe("Login and Register test.", () => {
	var randNum = Math.floor((Math.random() * 10000) + 1);
	var registeredEmail = "kevinh_test" + randNum + "@benon.com";
	var registeredPassword = "5Me3Test";
	it("Register Test", () => {
		// Visit the base URL
		cy.visit("/");
		cy.title().should("contain", "Oz Lotteries");

		// Click the Login Button
		cy.get("#header_login_button").click();

		// Click the "Not a Member? Register Now" link
		cy.get("#loginFormContainer_registerLink").click();

		// Email + Password

		cy.get("#signup_email").type(registeredEmail);
		cy.get("#signup_password").type(registeredPassword);

		// Name
		cy.get("#title").select("Dr");
		cy.get("#signup_first_name").type("Kevin");
		cy.get("#signup_last_name").type("Testing");

		// DOB
		var randDay = Math.floor((Math.random() * 28) + 1).toString().padStart(2, '0');
		var randMonth = Math.floor((Math.random() * 12) + 1).toString().padStart(2, '0');
		var randYear = Math.floor((Math.random() * 87) + 1914).toString();
		cy.get("#dob_day").select(randDay);
		cy.get("#dob_month").select(randMonth);
		cy.get("#dob_year").select(randYear);

		// Address
		cy.get("#address_autocomplete").type("123 New South Head Road, Vaucluse NSW, Australia");

		// Using autocomplete
		cy.get("[data-id=addressAutoComplete_suggestion]").first().click();

		// No autocomplete
		// cy.get("#signup_suburb").type("Vaucluse");
		// cy.get("#signup_state").type("NSW");
		// cy.get("#signup_postcode").type("2030");
		// cy.get("#country").select("Australia");
		cy.get("#signup_phone").type("987654321");

		// Agree to terms and conditions
		cy.get("#signup_agree_checkbox_button").click();

		// Register Button vs Submit ?
		cy.get("#signup_form").submit();
		// cy.get("[data-id=signup_submit_button]").click()

		// Assert that I'm logged in by looking for the logout button
		// WEIRD - if I uncomment the should-contain-Logout line my session
		// seems to leak into the next "it" block which subsequently fails
		// because it is still logged in from the registration.
		// cy.get("#nav_logout_link").should("contain", "Logout");
	});
	it("Login with Registered Details", () => {
		// Visit the base URL
		cy.visit("/");
		cy.title().should("contain", "Oz Lotteries");

		// Click the Login Button
		cy.get("#header_login_button").click();

		// Enter Login Details
		cy.get("#dynamic_customer_login_form_email").type(registeredEmail);
		cy.get("#dynamic_customer_login_form_password").type(registeredPassword);
		cy.get("#dynamic_customer_login_form_form").submit();

		// Assert that I'm logged in by looking for the logout button
		cy.get("#nav_logout_link").should("contain", "Logout");
	});
});
