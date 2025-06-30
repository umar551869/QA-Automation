//Muhammad Umar Ilyas
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe('User Journey', () => {

   beforeEach('Visits the site and accepts cookies', () => {
    cy.clearCookies();
    cy.visit('https://www.arrivabus.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click({force:true});
  })
it('Varifies Calender Date Selection', () => {
  cy.get('#DPdefault').click({force:true})
  cy.get('.react-datepicker__day.react-datepicker__day--030.react-datepicker__day--selected.react-datepicker__day--today').should('contain','30').click();
  //cy.get('._2nLcqhYfJi2Jep-CiHF4mi > ._nfmPejYIgKBBPi4ONjx7').click({force:true}) 
  cy.get('._2nLcqhYfJi2Jep-CiHF4mi').children().eq(2).click({force:true}) 

})


}); 