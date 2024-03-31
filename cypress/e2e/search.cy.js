/// <reference types="cypress"/>

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://ecommerce-playground.lambdatest.io/');
    })

    it("find the Search", () => {
        cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .flex-fill > input')
            .type('phone')
            .trigger('mouseover')

            // document.querySelector("")

            cy.get("#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .btn").click();
            cy.get('#entry_217822 > .search-wrapper > form > #search > .search-input-group > .search-input > .dropdown > .dropdown-menu > [data-category_id="25"]').click();

            cy.get('[type=submit]').contains('Search').click();

        // cy.get("#search > div.search-input-group.flex-fill > div.dropdown > ul > li:nth-child(1)").children(1).click({force: true,multiple: true })

        // cy.get(".dropdown-menu > li").click({focus:true, multiple: true })
    })

})