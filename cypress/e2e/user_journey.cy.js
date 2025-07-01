describe('User Journey', () => {
   beforeEach('Visits the site and accepts cookies', () => {
    cy.clearCookies();
    cy.visit('https://www.arrivabus.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click({force:true});
  })

  //shahmeer To function 
it('should complete a basic user journey', () => {
    cy.wait(3000);

    
    cy.get('.search-select__value-container').eq(1).click();
    cy.get('[aria-label="Where do you want to go?"]').type('L', { force: true });
   
    cy.get('[id^="react-select"][id$="-option-0"]').should('not.exist');
    cy.get('[aria-label="Where do you want to go?"]').type('O', { force: true });
    cy.get('[id^="react-select"][id$="-option-0"]').should('not.exist');
    cy.get('[aria-label="Where do you want to go?"]').type('N', { force: true });
    cy.get('[id^="react-select"][id$="-option-0"]').should('exist');



    cy.get('[id^="react-select"][id$="-option-3"]', { timeout: 10000 })
        .should('be.visible')
        .click();

}); 

});
