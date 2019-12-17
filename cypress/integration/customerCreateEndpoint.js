/// <reference types="Cypress" />

describe("Create a Customer", () => {
	it("Test Create Customer Endpoint", () => {
		var url = 'http://test-api.jl.kevinh.dev.lan/testapi/customer/create';
		cy.request("POST", url).then((response) => {
			expect(response.status).to.equal(200);
			expect(response.body).to.have.property('email');
			expect(response.body).to.have.property('customer_id');
		});
	});
});
