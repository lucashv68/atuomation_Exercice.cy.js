import { elements as el } from "../elements/elementsSignUpPage"
class deleteConta{
    logout(){
        cy.get(el.buttonLogout).click()
        cy.url().should('eq','https://www.automationexercise.com/login')

    }
    
    excluirConta(){
        cy.get(el.buttonExcluirConta).click()
        cy.contains('h2', 'Account Deleted!').should('be.visible')

    }

}

export default new deleteConta()