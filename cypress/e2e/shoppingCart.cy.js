describe('Shopping cart tests', () => {
    beforeEach(() => {
      cy.visit('https://magento.softwaretestingboard.com/');
    });
  
    /*se verifica que el producto 'Argus All-Weather Tank' se pueda agregar al carrito de compras 
    seleccionando las opciones de tamaño y color, y que se muestre un mensaje de éxito y se actualice el 
    número de productos en el carrito de compras.*/

    it('adds a product to the shopping cart', () => {
      cy.get('.product-item-link').contains('Argus All-Weather Tank').click();
      cy.get('#option-label-size-166').click();
      cy.get('#option-label-color-93').click();
      cy.get('.add-to-cart-buttons').find('.btn-cart').click();
      cy.get('.success-msg').should('contain', 'Argus All-Weather Tank was added to your shopping cart.');
      cy.get('.top-cart-btn').should('contain', '1');
    });
  
    /*Se verifica que el producto 'Argus All-Weather Tank' se pueda eliminar del carrito de compras 
    y que se muestre un mensaje de éxito y se actualice el número de productos en el carrito de compras.*/

    it('removes a product from the shopping cart', () => {
      cy.get('.top-cart-btn').click();
      cy.get('.product-cart-actions').find('.btn-remove').click();
      cy.get('.success-msg').should('contain', 'Argus All-Weather Tank was removed from your shopping cart.');
      cy.get('.top-cart-btn').should('not.contain', '1');
    });
  
    /*Se verifica que si no se selecciona una opción requerida (en este caso, tamaño y color), 
    se muestre un mensaje de error indicando que se deben especificar las opciones requeridas.*/
    it('displays an error message if a required option is not selected', () => {
      cy.get('.product-item-link').contains('Argus All-Weather Tank').click();
      cy.get('.add-to-cart-buttons').find('.btn-cart').click();
      cy.get('.error-msg').should('contain', 'Please specify the product required option(s).');
    });
  });
  