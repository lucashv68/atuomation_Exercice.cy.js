class produtos{
    clicarProduto(){
        cy.get('.shop-menu > .nav > :nth-child(2) > a',{timeout : 5000}).click()
        

    }

    verificarProdutos(){
        cy.get('.features_items').should('be.visible')
        .find('.product-image-wrapper')
        .should('have.length.at.least', 34)
    }

    buscaPorNome(){
        cy.get('#search_product').type('Blue Top')
        cy.get('#submit_search').click()
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > img').should('be.visible')

    }

    multiplosProdutos(){
        cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get(':nth-child(4) > .product-image-wrapper > .single-products > .productinfo > .btn').click()
        cy.get('.modal-title').should('be.visible').and('have.text','Added!')
        cy.get('u',{timeout:6000}).click()
        cy.get('#product-1',{timeout:6000}).should('be.visible')
        cy.get('#product-2',{timeout:6000}).should('be.visible')
       

        

        
       
    }

}

export default new produtos()