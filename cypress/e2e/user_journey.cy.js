describe('Arriva Bus - Homepage', () => {
  beforeEach(() => {
    cy.visit('https://www.arrivabus.co.uk/')
   cy.get('#onetrust-accept-btn-handler').click()
    Cypress.on('uncaught:exception', (err, runnable) => {
 
  return false;
});
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
  
  });

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



  it('Varifies Calender Date Selection', () => {
  cy.get('#DPdefault').click({force:true})
  cy.get('.react-datepicker__day.react-datepicker__day--030.react-datepicker__day--selected.react-datepicker__day--today').should('contain','30').click();
  //cy.get('._2nLcqhYfJi2Jep-CiHF4mi > ._nfmPejYIgKBBPi4ONjx7').click({force:true}) 
  cy.get('._2nLcqhYfJi2Jep-CiHF4mi').children().eq(2).click({force:true}) 

    })

  
})