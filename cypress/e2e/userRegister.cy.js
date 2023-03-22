describe('User register', () => {
    // Visit the login page before each test
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    })
  
    // Test case to verify that a new user can be registered in the store
    it('Test 1: ', () => {
      cy.get('.panel header').contains('Create an Account').click()
      cy.get('.resetBox').should('be.visible')
    })
})