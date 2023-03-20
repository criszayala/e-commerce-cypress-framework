describe('User register', () => {
    // Visit the login page before each test
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/')
    })
  
    // Test case to check if Reset Password form is displayed when the link is clicked
    it('should display the Reset Password form when the link is clicked', () => {
      cy.get('.loginForm a').contains('Forgot your password?').click()
      cy.get('.resetBox').should('be.visible')
    })
})