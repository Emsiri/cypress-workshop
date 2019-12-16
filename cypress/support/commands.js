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
});

Cypress.Commands.add("getByDataId", dataId => {
	cy.get(`[data-id='${dataId}']`);
});

import sha1 from "sha1";

const TEST_API_URL = Cypress.env("TEST_API_URL");
const BASE_URI = `${TEST_API_URL}/testapi/customer`;
const CREATE_URI = `${BASE_URI}/create`;
const CREATE_AUTOLOGIN_URI = `${BASE_URI}/autologin-token`;

Cypress.Commands.add("userCreate", (body = {}) => {
	cy.request({
		method: "POST",
		url: CREATE_URI,
		form: true,
		body
	}).then(response => {
		return {
			customerId: response.body.customer_id,
			email: response.body.email,
			password: "4Me2Test"
		};
	});
});

Cypress.Commands.add("userLoginWithAPI", { prevSubject: "optional" }, (subject, reloadOnPage, email, password) => {
	const domain = Cypress.config("baseUrl").replace(/https?:\/\/www/, "");
	const appKey = "ozlotteries_ios_1";
	const appSecret = "cho4Maec2Shoom3Aigie";
	const time = Date.now();
	const skey = sha1(`${appKey}${time}${appSecret}`);
	const apiUrl = Cypress.config().baseUrl.replace("www.", "api.");

	cy.request({
		method: "POST",
		url: `${apiUrl}/v2/login`,
		headers: {
			"X-Jumbo-Version": "2.9",
			"X-Jumbo-AppKey": appKey,
			"X-Jumbo-SKEY": skey,
			"X-Jumbo-Timestamp": time,
			"content-type": "application/json"
		},
		body: {
			email: (subject && subject.email) || email,
			password: (subject && subject.password) || password
		}
	}).then(response => {
		const {
			access_token: accessToken,
			customer_token: customerToken,
			customer: { id: customerID }
		} = response.body.result;
		cy.setCookie("web_access_token", accessToken, { domain });
		cy.setCookie("customer_token", customerToken, { domain });
		cy.setCookie("customer_id", customerID, { domain });
	});

	if (reloadOnPage) {
		cy.visit(reloadOnPage);
	} else {
		cy.location().then(location => cy.visit(location.href));
	}
	cy.get("#nav_logout_link").should("be.visible");
});