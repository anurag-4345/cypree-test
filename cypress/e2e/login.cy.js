/// <reference types="cypress"/>

describe('template spec', () => {
  beforeEach(() => {
    cy.visit('https://ecommerce-playground.lambdatest.io/');
  })

  it("find the login button and click", () => {

    //navigate the login page
    var loginNav = (name,flag) => {
      cy.get(".nav-item").contains(name)
      .click({ multiple: true, force: true })
      if(flag){
        cy.get('.btn-primary').contains("Continue")
        .click({ multiple: true, force: true })
      }
    } 

    loginNav("My account",true);
    // registration form
    cy.get('[name=firstname]').type('Anurag')
    cy.get('[name=lastname]').type('thakur')
    cy.get('[name=email]').type('anurag7@thakur.com')
    cy.get('[name=telephone]').type('9999999991')
    cy.get('[name=password]').type('123123')
    cy.get('[name=confirm]').type('123123')
    cy.get('[type=checkbox]').check({ force: true })
    cy.get(".btn-primary").contains("Continue").click()
    
    
    //User login
    loginNav("Login",false);
    cy.get('[name=email]').type('anurag3@thakur.com')
    cy.get('[name=password]').type('123123')
    cy.get('.btn-primary').contains('Login').click();
  })

})