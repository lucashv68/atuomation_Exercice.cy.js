class paginaInicial{
    acessarPagina(){
         cy.url().should('equal','https://www.automationexercise.com/')
    }
}

export default new paginaInicial()