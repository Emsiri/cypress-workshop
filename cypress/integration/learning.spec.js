describe("Learning", () => {
	const random = Math.floor((Math.random() * 1000000));
	const email = `dog@woofspace${random}.com`;
	const password = "4Me2Test"

	it("should be able to register", () => {
		cy.visit("/");
		cy.get('#header_login_button').click();
		cy.get('#loginFormContainer_registerLink').click();

		//Fill out all fields
		cy.get('#signup_email').type(email);
		cy.get('#signup_password').type(password);
		cy.get('#signup_first_name').type('Weasley');
		cy.get('#signup_last_name').type('Bloyce');
		cy.get('select#title').select('Dr');
		cy.get('#dob_day').select('26');
		cy.get('#dob_month').select('10');
		cy.get('#dob_year').select('2000');
		cy.get("#address_autocomplete").type("123 Eagle Street");
		cy.get("#signup_suburb").type("Brisbane City");
		cy.get("#signup_state").type("QLD");
		cy.get("#signup_postcode").type("4000");
		cy.get("#signup_phone").type("1300 655 06")
		cy.get("#signup_agree_checkbox_button").click();
		cy.get("#signup_form").submit();
	});

	it("should login", () => {
		cy.visit("/");
		cy.get('#header_login_button').click();
		cy.get("#dynamic_customer_login_form_email").type(email);
		cy.get("#dynamic_customer_login_form_password").type(password);
		cy.get("#dynamic_customer_login_form_form").submit();
	})
});