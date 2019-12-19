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


Cypress.Commands.add('registerUserUsingForm', (user) => {
	const [, year, month, day] = user.dob.match(/(\d\d\d\d)-(\d\d)-(\d\d)/)

	cy.visit('/')
	cy.get('#header_login_button').click()
	cy.get('#loginRegisterForm_email').type(user.email)
	cy.get('[data-id="loginRegisterForm_submit"]').click()
	cy.get('#signup_password').type(user.password)
	cy.get('#title').select(user.title)
	cy.get('#signup_first_name').type(user.firstname)
	cy.get('#signup_last_name').type(user.lastname)
	cy.get('#dob_day').select(day)
	cy.get('#dob_month').select(month)
	cy.get('#dob_year').select(year)
	cy.get('#address_autocomplete').type(user.address)
	cy.get('[data-id="addressAutoComplete_suggestionText"]').first().click()
	cy.get('#signup_phone').type(user.phone)
	cy.get('#signup_agree_checkbox_button').click()
	cy.get('[data-id="signup_submit_button"]').click()

	cy.location('pathname').should('eq', '/my-account')
	cy.get('[data-id="myAccountPage_pageHeader"]').should('contain', `Hi ${user.firstname}`)
})

Cypress.Commands.add('loginUserUsingForm', (user) => {
	cy.visit('/')
	cy.get('#header_login_button').click()
	cy.get('#loginRegisterForm_email').type(user.email)
	cy.get('[data-id="loginRegisterForm_submit"]').click()
	cy.get('#LoginRegister_Login_password').type(user.password)
	cy.get('[data-id="LoginRegister_Login_submitButton"]').click()

	cy.location('pathname').should('eq', '/my-account')
	cy.get('[data-id="myAccountPage_pageHeader"]').should('contain', `Hi ${user.firstname}`)
})

Cypress.Commands.add('registerUserUsingApi', (user) => {
	cy.request({
		method: 'POST',
		url: Cypress.env('TEST_API_URL') + '/testapi/customer/create',
		body: user,
		form: true,
	}).then(response => {
		expect(response.status).to.eql(200)
		expect(response.body.email).to.eql(user.email)
		expect(response.body.customer_id).to.be.a('string')
	})
})

Cypress.Commands.add('loginUserUsingApi', (user) => {
	const USER = Cypress.env('USER')
	const requestUrl = `http://api.ozlotteries.${USER}.dev.lan/api/v2/login`
	const cookieDomain = `www.ozlotteries.${USER}.dev.lan`

	cy.request({
		method: 'POST',
		url: requestUrl,
		body: {
			email: user.email,
			password: user.password,
		},
		form: true,
		headers: {
			'x-jumbo-appkey': 'ozlotteries_web_ui',
			'x-jumbo-session-id': 'c732f26277f7223a88a9a2ce04ad58061a8ffc6f',
			'x-jumbo-skey': '6aadfed50d8eea2255a7b1f60cf857599afbdd5b',
			'x-jumbo-sv': 'QLD',
			'x-jumbo-timestamp': '1576560682568',
			'x-jumbo-version': '2.9',
		},
	}).then(response => {
		expect(response.status).to.eql(200)
		expect(response.body.result.customer.email).to.eql(user.email)

		cy.setCookie('customer_id', response.body.result.customer.id, {domain: cookieDomain})
		cy.setCookie('customer_token', response.body.result.customer_token, {domain: cookieDomain})
		cy.setCookie('web_access_token', response.body.result.access_token, {domain: cookieDomain})
		cy.setCookie('web_refresh_token', response.body.result.refresh_token, {domain: cookieDomain})
	})
})
