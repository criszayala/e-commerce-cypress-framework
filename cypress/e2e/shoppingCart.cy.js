describe('Shopping cart tests', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/');
    });
  
    it('adds a product to the shopping cart', () => {
      cy.get('.product-item-link').contains('Argus All-Weather Tank').click();
      cy.get('#option-label-size-166').click();
      cy.get('#option-label-color-93').click();
      cy.get('.add-to-cart-buttons').find('.btn-cart').click();
      cy.get('.success-msg').should('contain', 'Argus All-Weather Tank was added to your shopping cart.');
      cy.get('.top-cart-btn').should('contain', '1');
    });
  
    it('removes a product from the shopping cart', () => {
      cy.get('.top-cart-btn').click();
      cy.get('.product-cart-actions').find('.btn-remove').click();
      cy.get('.success-msg').should('contain', 'Argus All-Weather Tank was removed from your shopping cart.');
      cy.get('.top-cart-btn').should('not.contain', '1');
    });
  
    it('displays an error message if a required option is not selected', () => {
      cy.get('.product-item-link').contains('Argus All-Weather Tank').click();
      cy.get('.add-to-cart-buttons').find('.btn-cart').click();
      cy.get('.error-msg').should('contain', 'Please specify the product required option(s).');
    });
  });
  