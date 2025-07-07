// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.Commands.add('visitURL', (url) => { 
        cy.visit(url);
        cy.clearCookies();
        cy.wait(300);
        cy.get('#onetrust-accept-btn-handler').click({force:true});
 })
 Cypress.Commands.add('typeIntoBraintreeHostedField', (iframeId, value) => {
        // Find the specific iframe by its ID on the main page
        cy.get(`#${iframeId}`, { timeout: 10000 }) // Add a timeout for iframe to appear
          .should('exist') // Ensure the iframe element is in the DOM
          .then(($iframe) => {
            const iframeSrc = $iframe.prop('src');
            // Dynamically extract the origin from the iframe's src attribute.
            // This is robust against minor version changes in Braintree's CDN path.
            const iframeOrigin = new URL(iframeSrc).origin;
      
            // Use cy.origin to switch the context to the Braintree iframe's origin.
            // The 'args' object passes data into the cy.origin callback.
            cy.origin(iframeOrigin, { args: { value } }, ({ value }) => {
              // Inside this callback, Cypress commands operate within the Braintree iframe's origin.
              // Braintree Hosted Fields typically have a single input element inside their iframe.
              // We use 'input' as a general selector, as Braintree handles the internal naming.
              // { log: false } prevents excessive logging for each character typed,
              // making the Cypress Command Log cleaner.
              cy.get('input', { log: false })
                .should('be.visible') // Ensure the input field is visible inside the iframe
                .type(value, { log: false });
            });
          });
      });