/// <reference types="Cypress" />

// describe block is the first thing you'll add to every test.
// All test code needs to be included within the describe block
// A description is necessary as Cypress uses this to name your test
describe("Smoke test.", () => {
	// It blocks can be thought of as individual test scenarios within tests
	// Also needs a description
	it("should display the home page", () => {
		// All cypress comands start with cy
		// visit loads the URL within the braces and waits for the page to fully load before continuing
		cy.visit("/")
		// Assertion on what text the h1 contains
		cy.title().should("contain", "Oz Lotteries")
		cy.get('#header_login_button').click()
		cy.get('#loginFormContainer_registerLink').click()
		// cy.should('have.attr', 'href', 'https://www.ozlotteries.com/signup').click()
		cy.get('#signup_email').type('hetas_1111@benon.com')
		cy.get('#signup_password').type('abcd1234')
		cy.get('#signup_first_name').type('heta')
		cy.get('#signup_last_name').type('soni')
		cy.get('#dob_day').select('9')
		cy.get('#dob_month').select('January')
		cy.get('#dob_year').select('1999')
		cy.get('#address_autocomplete').type('999 Queen Street')
		cy.get('#signup_suburb').type('Sydney')
		cy.get('#signup_state').type('NSW')
		cy.get('#signup_postcode').type('2000')
		cy.get('#country').select('Australia')
		cy.get('#signup_phone').type('036556599')
		cy.get('#signup_agree').check({ force:true }).should('be.checked')
		cy.get('[data-id="signup_submit_button"]').click()


	});

	it('Login',()=>{
		cy.visit("/")
		cy.get('#header_login_button').click()
		cy.get('#dynamic_customer_login_form_email').type('hetas_1111@benon.com')
		cy.get('#dynamic_customer_login_form_password').type('abcd1234')
		cy.get('[data-id="dynamic_customer_login_form_submitButton"]').click()



	})
});
