import createUser from '../helpers/createUser'

describe('lab-2 exercise', () => {
	describe('registration and login', () => {

		it('should be able to register a new user using the (test) API', () => {
			const user = createUser()
			cy.registerUserUsingApi(user)
		})

		it('should be able to login using the API', () => {
			const user = createUser()
			cy.registerUserUsingApi(user)
			cy.loginUserUsingApi(user)

			cy.visit('/my-account')
			cy.get('#nav_logout_link').should('exist')
			cy.get('[data-id="myAccountPage_pageHeader"]').should('contain', `Hi ${user.firstname}`)
		})
	})
})
