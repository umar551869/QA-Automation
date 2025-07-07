import * as JourneyElements from "../support/pageobjects/JourneyElements.cy";
import 'cypress-iframe'

class JourneyPlanner{
    clickElement(element)
    {
        return cy.get(element).click()
        
    }
    selectlocation(element,locationElement){
        return cy.get(element).type('lon').wait(1000).get(locationElement).click();
    }
    selectDate(calender_icon , Done , planJourneyElement){
        return cy.get(calender_icon).click().get(Done).click().get(planJourneyElement).click();
    }
    VerifyBuses(){
        return cy.get('._31rQ751Nvg7OHsoayVl0SY').not('.D9kIn_IVMyRexfVqJ_i6y').children('div').should('have.length',6);
    }
    selectBus(busElement){
        return cy.get(busElement).click()
    }
    verifyLocation(){
        return cy.get(JourneyElements.verifyLocation).should('have.text','Longbenton Bt Call Centre - Longbenton Bt Call Centre Salters Lane')
    }
    buyTicket(){
        return cy.get(JourneyElements.buyTickets).click({force:true}).wait(500);
    }
    checkout(){
        return cy.get(JourneyElements.addqty).eq(1).click()
        
      
    }
    cart(){
        return cy.get(JourneyElements.cart).click();
    }
    signin(){
        return cy.get(JourneyElements.signin).click();
    }
    addEmail(){
        return cy.get(JourneyElements.email).click().type('bassam9803@gmail.com')
    }
    addPassword(){
        return cy.get(JourneyElements.password).click().type('BassamK69!').get(JourneyElements.signinbitton).click()
    }
    payByCard(){
        return cy.wait(10000).get(JourneyElements.selectCard).click()
    }
    // Helper method to interact with an input inside an iframe
    enterIntoIframeField(iframeSelector, inputSelector, value) {
      cy.get(iframeSelector, { timeout: 10000 }).then($iframe => {
        const body = $iframe.contents().find('body');
        cy.wrap(body).find(inputSelector).type(value, { force: true });
      });
    }
    enterCardNumber(value) {
      this.enterIntoIframeField(JourneyElements.cardNumberIframeSelector, JourneyElements.cardNumberInput, value);
    }
    enterCardExpiry(value) {
      this.enterIntoIframeField(JourneyElements.cardExpiryIframeSelector, JourneyElements.cardExpiryInput, value);
    }
    enterCardCVV(value) {
      this.enterIntoIframeField(JourneyElements.cardCVVIframeSelector, JourneyElements.cardCVVInput, value);
    }
    enterPostalCode(value) {
      this.enterIntoIframeField(JourneyElements.cardPostalIframeSelector, JourneyElements.cardPostalInput, value);
    }
    confirmPayment() {
      cy.get(JourneyElements.confirmPaymentButton, { timeout: 10000 }).click({ force: true });
    }
    enterCardHolderName(name) {
     cy.get(JourneyElements.cardHolderIframeSelector, { timeout: 10000 }).then($iframe => {
       const body = $iframe.contents().find('body');
       cy.wrap(body)
         .find(JourneyElements.cardHolderNameInput)
         .type(name, { force: true });
    });
   }
  }
export default new JourneyPlanner()