/*describe('Calender', () => {
    
    beforeEach('Visits the site and accepts cookies', () => {
    cy.clearCookies();
    cy.visit('https://www.arrivabus.co.uk/');
    cy.get('#onetrust-accept-btn-handler').click({force:true});
  })
  it('Checks that 60 days after today is disabled in the calendar', () => {
    cy.get('#DPdefault').click({force:true});

    const today = new Date();
    const targetDate = new Date(today);
    targetDate.setDate(today.getDate() + 61);
  
    const targetYear = targetDate.getFullYear();
    const targetMonth = targetDate.getMonth(); 
    const targetDay = targetDate.getDate();

    function getCurrentMonthYear() {
      return cy.get('.react-datepicker__month').invoke('attr', 'aria-label').then((ariaLabel) => {
        // ariaLabel format: "month  YYYY-MM"
        const match = ariaLabel.match(/month\s+(\d{4})-(\d{2})/);
        if (!match) throw new Error('Could not parse aria-label for month/year');
        const currentYear = parseInt(match[1]);
        const currentMonth = parseInt(match[2], 10) - 1; 
        return { currentMonth, currentYear };
      });
    }

    function goToTargetMonth() {
      getCurrentMonthYear().then(({ currentMonth, currentYear }) => {
        if (currentYear < targetYear || (currentYear === targetYear && currentMonth < targetMonth)) {
          cy.get('#next-month-handler').click();
          goToTargetMonth();
        } else if (currentYear > targetYear || (currentYear === targetYear && currentMonth > targetMonth)) {
          cy.get('#prev-month-handler').click();
          goToTargetMonth();
        }
      });
    }

    goToTargetMonth();

    cy.get('.react-datepicker__month').invoke('attr', 'aria-label').should((ariaLabel) => {
      const match = ariaLabel.match(/month\s+(\d{4})-(\d{2})/);
      expect(match, 'aria-label format').to.not.be.null;
      const currentYear = parseInt(match[1]);
      const currentMonth = parseInt(match[2], 10) - 1;
      expect(currentYear).to.eq(targetYear);
      expect(currentMonth).to.eq(targetMonth);
    });

    cy.get(`.react-datepicker__day--0${targetDay.toString().padStart(2, '0')}`)
  .not('.react-datepicker__day--outside-month')
  .should('have.class', 'react-datepicker__day--disabled');


  });
});*/

describe("Calendar", () => {
  beforeEach("Visits the site and accepts cookies", () => {
    cy.clearCookies();
    cy.visit("https://www.arrivabus.co.uk/");
    cy.get("#onetrust-accept-btn-handler").click({ force: true });
  });

  it("Checks that 60 days after today is disabled in the calendar", () => {
    cy.get("#DPdefault").click({ force: true });

    const today = new Date();

    const currentMonth = today.getMonth(); 
    const currentYear = today.getFullYear();

    const targetDate = new Date(today);

    targetDate.setDate(today.getDate() + 61); 
    cy.log(targetDate)
    const targetDay = String(targetDate.getDate()).padStart(2, '0');
    const targetYear = targetDate.getFullYear();
    const targetMonth = targetDate.getMonth();

    cy.get('body').then(() => {
      const monthsDiff = (targetYear - currentYear) * 12 + (targetMonth - currentMonth);//2
      for (let i = 0; i < monthsDiff; i++) {

        cy.get('#next-month-handler').click();
        cy.get(`.react-datepicker__day--0${targetDay}`+ '.react-datepicker__day--disabled')
        //.should('contain.class','react-datepicker__day--outside-month')
        .should('have.class', 'react-datepicker__day--disabled');
        cy.log('Number of clicks on month handler button',i+1);
        if (cy.get('#next-month-handler').should('be.disabled')){
          break;
        }
      }

        cy.get(`.react-datepicker__day--0${targetDay}`+ '.react-datepicker__day--disabled')
        //.should('contain.class','react-datepicker__day--outside-month')
        .should('have.class', 'react-datepicker__day--disabled');
      
    });
  });
});
