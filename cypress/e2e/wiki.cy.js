describe('Wiki Search Test', () => {
    it('Searches and verifies page', () => {
        cy.visit('https://en.wikipedia.org/wiki/Main_Page')
        cy.get('#searchInput').type('Schwarzenegger')
        cy.get('.cdx-search-input > .cdx-button').click()
        cy.url().should('equal', 'https://en.wikipedia.org/wiki/Arnold_Schwarzenegger')
    })
})