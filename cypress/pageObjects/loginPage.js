import { gerarUsuario } from "../support/fakerData"
const usuario = gerarUsuario()

class LoginCadastro{


    

    novoCadastro(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a').click()
        cy.get('[data-qa="signup-name"]').type('lucasHenrique')
        cy .get('[data-qa="signup-email"]').type('lucashenrique123@gmail.com')
        cy.get('[data-qa="signup-button"]').click()

    }

    formularioCadastro(){
        cy.get('#id_gender2',{timeout: 6000}).click()
        cy.get('[data-qa="password"]').type('lucas123.')
        cy.get('[data-qa="days"]').select('11')
        cy.get('[data-qa="months"]').select('June')
        cy.get('[data-qa="years"]').select('1997')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('[data-qa="first_name"]').type('Lucas')
        cy.get('[data-qa="last_name"]').type('Henrique')
        cy.get('[data-qa="company"]').type('Lucas QA tester')
        cy.get('[data-qa="address"]').type('58800000')
        cy.get('[data-qa="address2"]').type('Ferreiros - PE ')
        cy.get('[data-qa="country"]').select('United States')
        cy.get('[data-qa="state"]').type('Pernambuco')
        cy.get('[data-qa="city"]').type('Ferreiros')
        cy.get('[data-qa="zipcode"]').type('55880000')
        cy.get('[data-qa="mobile_number"]').type('81992945811')
        cy.get('[data-qa="create-account"]').click()
        cy.get('b').should('be.visible').and('have.text','Account Created!')
        cy.get('[data-qa="continue-button"]').click()
       



    }

    verificaLogin(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a',{timeout: 6000}).click()
        cy.get('[data-qa="login-email"]').type('lucashenrique123@gmail.com')
        cy.get('[data-qa="login-password"]').type('lucas123.')
        cy.get('[data-qa="login-button"]').click()
        cy.get('b').should('be.visible')

    }

    loginValido(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a',{timeout: 6000}).click()
        cy.get('[data-qa="login-email"]').type('lucashenrique123@gmail.com')
        cy.get('[data-qa="login-password"]').type('lucas123.')
        cy.get('[data-qa="login-button"]').click()
        cy.get('b').should('be.visible')

    }

    loginInvalido(){
        cy.get('.shop-menu > .nav > :nth-child(4) > a',{timeout: 6000}).click()
        cy.get('[data-qa="login-email"]').type('lucaweae@gmail.com')
        cy.get('[data-qa="login-password"]').type('luca.')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.login-form > form > p').should('be.visible').and('have.text','Your email or password is incorrect!')
        

    }

    

}

export default new LoginCadastro()