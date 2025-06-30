Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('Arriva Bus Homepage', () => {
  beforeEach('Visits the site and accepts cookies', () => {
    cy.clearCookies();
    cy.visit('https://www.arrivabus.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click({force:true});
  })
  it('Verifies the search bar fuctionality', () => {

    cy.get('.css-kwtm46').click();
    cy.get('.css-16tupby-placeholder').type('London');

    cy.get('#react-select-2-option-0').click({force:true});
    cy.get('.loading-spinner').should('not.exist');
    cy.wait(10000)
    cy.get('[href="/find-a-service/724-harlow-to-london-heathrow-airport"] > ._2lKg9Z25eo7i2FsNbgJawM').should('contain.text', 'London');
    cy.get('[href="/find-a-service/h1-london-road-park-and-ride-to-maidstone-hospital"] > ._2lKg9Z25eo7i2FsNbgJawM').should('contain.text', 'London');
    
  })
})
