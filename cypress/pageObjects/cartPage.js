import { elements as el } from "../elements/elementsCart"

class carrinho{
    checkCart(){
        cy.get(el.productBlueTop).click()
        cy.get(el.productWinterTop).click()
        cy.get(el.buttonViewCart, {timeout : 5000}).click()
        cy.get(el.buttonProcessCheckout,{timeout : 5000}).click()
        cy.get(el.buttonPlaceOrder).click()
        cy.get(el.nameCard).type('Lucas H g S Veloso')
        cy.get(el.numberCard).type('9999 9999 9999 9999')
        cy.get(el.cvcCard).type('111')
        cy.get(el.monthCard).type('21/28')
        cy.get(el.passwordCard).type('3265')
        cy.get(el.buttomFinishBuy).click()
        cy.get('[data-qa="order-placed"] > b').should('be.visible').and('have.text','Order Placed!')
        cy.get('.col-sm-9 > p').should('be.visible').and('have.text','Congratulations! Your order has been confirmed!')



    }

}

export default new carrinho()