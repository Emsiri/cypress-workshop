/// <reference types="Cypress" />

describe('Cypress lab 1', () => {

    beforeEach(function(){
        cy.visit('/')
        cy.get('#header_login_button').click()
    })

    //customer registration
    it('Verify customer registration', () => {
        cy.get('#loginFormContainer_registerLink').click()

        //enter all required details
        cy.get('#signup_email').type('bhagyas_test99@benon.com')
        cy.get('#signup_password').type('4Me2Test')
        cy.get('#title').select('Ms')
        cy.get('#signup_first_name').type('Bhagya')
        cy.get('#signup_last_name').type('Senanayake')
        cy.get('#dob_day').select('04')
        cy.get('#dob_month').select('08')
        cy.get('#dob_year').select('1991')
        cy.get('#address_autocomplete').type('11 Queen Street Brisbane City QLD Australia')
        cy.get('[data-id="addressAutoComplete_suggestionText"]').first().click()
        cy.get('#signup_phone').type('1234567891')
        cy.get('[data-id="signup_agree"]').check({force:true})
        cy.get('[data-id="signup_submit_button"]').click()
    });

    //user login
    it('Verify login', () => {
        cy.get('#dynamic_customer_login_form_email').type('bhagyas_test99@benon.com')
        cy.get('#dynamic_customer_login_form_password').type('4Me2Test')
        cy.get('[data-id="dynamic_customer_login_form_submitButton"]').click()
    });

})