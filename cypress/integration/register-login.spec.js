const EMAIL = 'williaml@benon.com';
const PASSWORD= 'iAmAPasswordd2018!';

describe("Register/Login", () => {
    it('should sign in', () => {
        cy.visit("/");
        cy.get("#header_login_button").click();
        cy.get("#loginFormContainer_registerLink").click();
        cy.get("[data-id=modalNavigation_close]").click();

        // Fill in the form
        cy.get("#signup_email").type(EMAIL);
        cy.get("#signup_password").type(PASSWORD);
        cy.get("#signup_first_name").type('Test');
        cy.get("#signup_last_name").type('Person');

        cy.get("#signup_dob_day").select('01');
        cy.get("#signup_dob_month").select('January');
        cy.get("#signup_dob_year").select('1970');

        cy.get("#address_autocomplete").type('1 William Street, Brisbane City QLD, Australia');
        cy.get("#signup_suburb").type('Brisbane City QLD, Australia');
        cy.get("#signup_state").type('QLD');
        cy.get("#signup_postcode").type('4006');
        cy.get("#signup_phone").type('0468357777');

        cy.get("#signup_agree").click();

        cy.get("#signup_submit_button").click();

        // sign out
        cy.get("#nav_logout_link").click()
    });

    it('should log in', () => {
        cy.visit("/");
        cy.get("#header_login_button").click();
        cy.get("#dynamic_customer_login_form_email").type(EMAIL);
        cy.get("#dynamic_customer_login_form_password").type(PASSWORD);
        cy.get("#dynamic_customer_login_form_submitButton").click();
    });
});