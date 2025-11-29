
/// <reference types="cypress"/>

describe('Selectors task', () => {

  beforeEach(() => {
    cy.visit('https://demo.productionready.io/#/register');
  });

  it('Select all required elements', () => {

    // NAV
   
    cy.contains('a.nav-link','Home')  // Home
    cy.contains('a.nav-link','Sign up')  // Sign Up 

    // TITLE
    cy.get('a.navbar-brand').contains('conduit')               // Conduit

    cy.contains('h1','Sign up')          
    cy.contains('a','Have an account?')

    // INPUTS
    cy.get('input[placeholder="Username"]')
    cy.get('input[placeholder="Email"]')
    cy.get('input[placeholder="Password"]')

    // BUTTON
    cy.get('button[type="submit"]')

    // FOOTER
    cy.get('footer').contains('conduit')
    cy.get('.attribution')                
  });

});
