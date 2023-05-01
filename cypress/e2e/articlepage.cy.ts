describe('template spec', () => {
  it('visit main page', () => {
    cy.visit('/')
    cy.get('.search_tags select').select('History')
    cy.get('.article:first h2 > a').click()
    cy.get('.breadcrumb').should('exist')
  })
})
