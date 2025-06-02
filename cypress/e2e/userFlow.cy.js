/// <reference types="cypress" /> 
import paginaInicial from '../pageObjects/homePage'
import LoginCadastro from '../pageObjects/loginPage'
import Produtos from '../pageObjects/PoductsPage'
import Carrinho from '../pageObjects/cartPage'
import Contact from '../pageObjects/contatctPage'
import deleteConta from '../pageObjects/signUpPage'


describe("Plano de testes Automation Exercise", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  context("Modulo 1 Cadastro e Login", () => {
    it("Cadastro de novo Usuario", () => {
      paginaInicial.acessarPagina();
      LoginCadastro.novoCadastro();
      LoginCadastro.formularioCadastro();
      LoginCadastro.verificaLogin();
    });

    context("Caso de Teste 2: Login com usuário válido e inválido", () => {
      it("Login Valido", () => {
        LoginCadastro.loginValido();
      });

      it("Login invalido", () => {
        LoginCadastro.loginInvalido();
      });
    });

    context("Caso de Teste 3: Visualizar lista de produtos", () => {
      it("Clicar em produtos após Login", () => {
        LoginCadastro.loginValido();
        Produtos.clicarProduto();
      });

      it("Verificar se todos os Produtos foram carregados", () => {
        LoginCadastro.loginValido();
        Produtos.clicarProduto();
        Produtos.verificarProdutos();
      });

      it("Busca Por nome - Produto Certo", () => {
        LoginCadastro.loginValido();
        Produtos.clicarProduto();
        Produtos.buscaPorNome();
      });

      context("Caso de Teste 4: ", () => {
        it("Adicionar múltiplos produtos ao carrinho", () => {
          LoginCadastro.loginValido();
          Produtos.clicarProduto();
          Produtos.multiplosProdutos();
        });
      });

      context("Caso de teste 5 : ", () => {
        it("Checkout completo", () => {
          LoginCadastro.loginValido();
          Carrinho.checkCart();
        });
      });

      context("Caso de Teste 6: ", () => {
        it("Enviar mensagem de contato", () => {
          Contact.clicarContateNos();
          Contact.prencherCampos();
          Contact.importarArquivo();
          Contact.enviarMensagem();
        });
      });

      context("Caso de Teste 7: ", () => {
        it("Logout e exclusão da conta", () => {
          LoginCadastro.loginValido();
          deleteConta.logout();
          LoginCadastro.loginValido();
          deleteConta.excluirConta();
        });
      });
    });
  });
});
    
