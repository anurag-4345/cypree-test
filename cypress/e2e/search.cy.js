/// <reference types="cypress"/>

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
    })

    it("find the Search", () => {
        
            //find and click the categories 
            cy.get("#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .btn").click();
            //click on the sub categorie in any one element
            cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > [data-category_id="25"]').click();
            
            // Find the Search input and type the product name
            cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input')
            .type('phone')
            .trigger('mouseover')
            
            // click on the 2nd element in the search suggestion section
            cy.get(":nth-child(2) > .dropdown-menu > :nth-child(2)")
            .click()    
            
            // click on the search button
            cy.get('[type=submit]').contains('Search').click();
            // .invoke("val")
            // .should("eq", "lowestprice")

        // cy.get("#search > div.search-input-group.flex-fill > div.dropdown > ul > li:nth-child(1)").children(1).click({force: true,multiple: true })

        // cy.get(".dropdown-menu > li").click({focus:true, multiple: true })
    })

})