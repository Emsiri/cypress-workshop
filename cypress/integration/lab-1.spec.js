import createUser from '../helpers/createUser'

describe('lab-1 exercise', () => {
	describe('registration and login', () => {
		const user = createUser()

		it('should be able to register a new user using the registration form', () => {
			cy.registerUserUsingForm(user)
		})

		it('should be able to login using the login form', () => {
			cy.loginUserUsingForm(user)
		})
	})
})
