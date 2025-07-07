import JourneyPlanner from "../support/sharedMethods.js";
import * as JourneyElements from "../support/pageobjects/JourneyElements.cy";
import 'cypress-iframe'
// cypress/support/e2e.js (or index.js)





describe('journeyPlaner', () => {
    const BRAINTREE_ORIGIN = 'https://assets.braintreegateway.com';
    beforeEach(() => {
        cy.visitURL(JourneyElements.URL);
    });
    
    

    it('Plan A Journey',()=> {
        cy.on('uncaught:exception', (err, runnable) => {
        
            return false;
          });
        //from
        JourneyPlanner.clickElement(JourneyElements.from);
        JourneyPlanner.selectlocation(JourneyElements.from , JourneyElements.fromLocation)
        //to
        JourneyPlanner.clickElement(JourneyElements.to);
        JourneyPlanner.selectlocation(JourneyElements.to , JourneyElements.toLocation)
        //date
        JourneyPlanner.selectDate(JourneyElements.calenderIcon , JourneyElements.dateDone ,JourneyElements.planJourney);
        JourneyPlanner.VerifyBuses(); 
        JourneyPlanner.selectBus(JourneyElements.selectBus)
        JourneyPlanner.verifyLocation();
        JourneyPlanner.buyTicket();
        JourneyPlanner.checkout();
        JourneyPlanner.cart();
        JourneyPlanner.signin();
        JourneyPlanner.addEmail();
        JourneyPlanner.addPassword();
        JourneyPlanner.payByCard();
        JourneyPlanner.enterCardHolderName('Umar Ilyas');
        JourneyPlanner.enterCardNumber('4111111111111111');
        JourneyPlanner.enterCardExpiry('12/26');
        JourneyPlanner.enterCardCVV('123');
        JourneyPlanner.enterPostalCode('12345');
        JourneyPlanner.confirmPayment();

        })  

    
});

