/// <reference types="Cypress" />

describe("Make an API request to the customer create endpoint", () => {
	const TEST_API_URL = Cypress.env("TEST_API_URL");
	it("should respond correctly", () => {
		cy.request("POST", `${TEST_API_URL}/testapi/customer/create`).then((response) => {
			expect(response.status).to.eq(200);
			expect(response.body).to.have.property('email');
			expect(response.body).to.have.property('customer_id');
			expect(response.body).to.have.all.keys('email', 'customer_id');
			expect(response.body.email).to.exist
			expect(response.body.customer_id).to.exist
			expect(response.body.email.length).to.be.greaterThan(1)
			expect(response.body.customer_id.length).to.be.greaterThan(1)
			expect(response.body.email).to.match(/[^@]*@benon.com/)
			expect(response.body.customer_id).to.match(/[A-Z0-9]{4}(-[A-Z0-9]{4}){3}/)
		});
	});

});
