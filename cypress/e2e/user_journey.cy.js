 describe('Arriva UK Bus', () => {
   beforeEach('Visits the site and accepts cookies', () => {
    cy.clearCookies();
    cy.visit('https://www.arrivabus.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click({force:true});
  })
  //The following IT has been edited by Bassam Khalid
  it('Plan a journey - Select and validate a starting point(from)', () => {
    cy.wait(6000)
    cy.get('.search-select__value-container').eq(0).click()
   
  cy.get('[aria-label="Where are you coming from?"]').eq(0).type('L',{force:true})
  cy.get('#react-select-3-option-0').should('not.exist')
   cy.get('[aria-label="Where are you coming from?"]').eq(0).type('o',{force:true})
  cy.get('#react-select-3-option-0').should('not.exist')
   cy.get('[aria-label="Where are you coming from?"]').eq(0).type('n',{force:true})
   cy.wait(5000)
  cy.get('.search-select__menu-list').should('exist')

  

  })

    //shahmeer To function 
it('should complete a basic user journey', () => {
    cy.wait(3000);

    cy.get('[aria-label="Where do you want to go?"]').type('L', { force: true });
   
    cy.get('[id^="react-select"][id$="-option-0"]').should('not.exist');
    cy.get('[aria-label="Where do you want to go?"]').type('O', { force: true });
    cy.get('[id^="react-select"][id$="-option-0"]').should('not.exist');
    cy.get('[aria-label="Where do you want to go?"]').type('N', { force: true });
    cy.get('[id^="react-select"][id$="-option-0"]').should('exist');



    cy.get('[id^="react-select"][id$="-option-0"]', { timeout: 10000 })
        .should('be.visible')
        .click();

    

});


  
})