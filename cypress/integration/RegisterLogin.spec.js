/// <reference types="Cypress" />

import faker from "faker";
faker.locale = "en_AU";

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
		cy.get("#loginRegisterForm_email").type(userDetails.email);
		cy.getByDataId("loginRegisterForm_submit").click();
		cy.fillRegistrationFormAndSubmit(userDetails);
	});
	it("should login correctly", () => {
		cy.server()
			.route("/api/v2/customer")
			.as("customer");
		const apiVersion = "2.9";
		cy.userCreate().userLoginWithAPI("/powerball", apiVersion);
		cy.get("#nav_logout_link").should("be", "visible");
	})
});
