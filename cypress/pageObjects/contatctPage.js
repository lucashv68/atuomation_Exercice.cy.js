import { elements as el } from "../elements/elementsContact"

class contact{
    clicarContateNos(){
        cy.get(el.buttonContato).click()
        cy.url().should('eq','https://www.automationexercise.com/contact_us')
        cy.contains('h2','Contact').should('be.visible')
    }

    prencherCampos(){
        cy.get(el.campoNome).type('Lucas')
        cy.get(el.campoEmail).type('lucashv@gmail.com')
        cy.get(el.campoAssunto).type('Compra por engano')
        cy.get(el.campoMensagem).type('COmpra foi enganada desejo cancelar, mas a fatura ainda consnta a compra')
    }

    importarArquivo(){
        cy.get(el.escolherArquivo).attachFile('Erro_03.jpg');

    }

    enviarMensagem(){
        cy.get(el.enviarMensagem).click()
        cy.get('.status').should('be.visible').and('have.text','Success! Your details have been submitted successfully.')
    }



}

export default new contact()