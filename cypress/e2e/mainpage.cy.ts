describe('template spec', () => {
  it('has all the main elements', () => {
    cy.visit('/')
    cy.get('header').then((el) =>
      expect(el).to.have.text('LonelyPlanet Guides')
    )
    cy.get('footer').then((el) =>
      expect(el).to.have.text('© LonelyPlanet Guides')
    )
    cy.get('main h2').then((el) => expect(el).to.have.text('Latest Articles '))
    cy.get('.search_tags select').should('be.enabled')
    cy.get('.search_places select').should('be.enabled')
  })
  it('selects tags and places', () => {
    cy.visit('/')
    cy.get('.search_tags select').select('History')
    cy.get('.article').should('have.length', 3)
    cy.get('.search_places select').select('China')
    cy.get('.filter_item').should('have.length', 2)
    cy.get('.article').should('have.length', 4)
  })
})
