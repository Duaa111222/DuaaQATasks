/// <reference types="cypress"/>



describe('Selectors task', () => {

  beforeEach(() => {
    cy.visit('https://demo.productionready.io/#/register');
  });

  it('Select all required elements', () => {

    // NAV
    cy.get('nav .nav-link[href="#/"]').should('be.visible');  // Home
    //cy.get('a.nav-link[href="#/login"]').should('be.visible');        // Sign in
    cy.get('a.nav-link[href="#/register"]').should('be.visible');     // Sign up

    // TITLE
    cy.get('h1.text-xs-center').contains('Sign up');                  // Title
    cy.get('p.text-xs-center').contains('Have an account?');          // Subtitle

    // INPUTS
    cy.get('input[placeholder="Username"]').type('testUser');
    cy.get('input[placeholder="Email"]').type('test@test.com');
    cy.get('input[placeholder="Password"]').type('123456');

    // BUTTON
    cy.get('button.btn.btn-lg.btn-primary.pull-xs-right').click();

    // FOOTER
    cy.get('a.logo-font[href="#/"]').should('be.visible');            // Footer logo
    cy.get('footer .container').should('be.visible');                 // Footer text
  });

});
