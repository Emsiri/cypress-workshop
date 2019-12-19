/// <reference types="Cypress" />

describe('Cypress Lab 2', () => {

    it('Verify Customer Create', () => {
        cy.request({
            method: 'POST',
            url: 'http://test-api.jl.bhagyas.dev.lan/testapi/customer/create'
        })
            .then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).to.have.property('customer_id');
                expect(response.body).to.have.property('email');
            })
    });

})
