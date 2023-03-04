describe('First test whit Cypress', () => {
  it('verify title-positive', () => {
    //Steps 
    //Ingreso al sitio web
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    //Se verifica el título del sitio
    cy.title().should('eq','OrangeHRM')

  })
  it('verify title-negative', () => {
    //Steps 
    //Ingreso al sitio web
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    //Se verifica el título del sitio 
    cy.title().should('eq','OrangeHRMTest')
  })
})