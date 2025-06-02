describe("Tetes de Api Automation exercise", () => {
  context(" GET All Products List", () => {
    it("Validar lista de produtos é rernoada com sucesso", () => {
      cy.request({
        method: "GET",
        url: "https://automationexercise.com/api/productsList",
      }).then((response) => {
        expect(response.status).to.eq(200);
        ///Convertento string para JSON
        const body = JSON.parse(response.body);
        expect(body).to.have.property("products");
        expect(body.products).to.be.an("array");
      });
    });

    it("não deve permitir POST na rota de produtos", () => {
      cy.request({
        method: "POST",
        url: "https://automationexercise.com/api/productsList",
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
        const body = JSON.parse(response.body);
        expect(body.responseCode).to.eq(405);
        expect(body.message).to.eq("This request method is not supported.");
      });
    });

    context("Testando retorno das marcas cadastradas", () => {
      it("Deve Retornar todas as Marcas", () => {
        cy.request({
          method: "GET",
          url: "https://automationexercise.com/api/brandsList",
        }).then((res) => {
          expect(res.status).to.eq(200);
          const body = JSON.parse(res.body);
          expect(body.brands.length).to.be.greaterThan(0);
        });
      });

      it("Deve retornar os produtos  Polo", () => {
        cy.request({
          method: "GET",
          url: "https://automationexercise.com/api/brandsList",
        }).then((response) => {
          expect(response.status).to.equal(200);
          // converte string para JSON
          const body = JSON.parse(response.body);
          // espera que o body tenha a propiedade brands
          expect(body).to.have.property("brands");
          // acessa a lista das marcas
          const brands = body.brands;
          // verifica se brands é uma lista, e se a lista não esta vazia
          expect(brands).to.be.an("array").and.not.to.be.empty;
          // filtra as marcas que tem o nome ' Polo '
          const poloBrands = brands.filter((brand) => brand.brand === "Polo");
          //verifica se ao menos 1 marca polo foi encontrada
          expect(poloBrands.length).to.be.greaterThan(0);
        });
      });
    });
    context("POST Search Product", () => {
      it("deve retornar erro se não enviar search_product sem parametro", () => {
        cy.request({
          method: "POST",
          url: "https://automationexercise.com/api/searchProduct",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: "",
        }).then((res) => {
          expect(res.status).to.eq(200);
          const json = JSON.parse(res.body);
          expect(json.responseCode).to.eq(400);
          expect(json.message).to.eq(
            "Bad request, search_product parameter is missing in POST request."
          );
          cy.log(res.body);
        });
      });
    });
    context("Requisições de Login", () => {
      it("Login deve funcionar com dados validos", () => {
        cy.request({
          method: "POST",
          url: "https://automationexercise.com/api/verifyLogin",
          failOnStatusCode: false,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `email=lucashenrique@gmail.com&password=lucas123.`,
        }).then((response) => {
          expect(response.status).to.eq(200);
          const json = JSON.parse(response.body);
          expect(json.message).to.eq("User exists!");

          cy.log(response.body);
        });
      });

      it("Login deve falhar ao logar com senha errada", () => {
        cy.request({
          method: "POST",
          url: "https://automationexercise.com/api/verifyLogin",
          failOnStatusCode: false,
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: `email=lucassssss@gmail.com&password=senha.aaa`,
        }).then((response) => {
          expect(response.status).to.eq(200);
          const json = JSON.parse(response.body);
          expect(json.message).to.eq("User not found!");

          cy.log(response.body);
        });
      });

      context("Requisições de Criação de Conta", () => {
        it("Deve criar uma nova conta de usuário com sucesso", () => {
          cy.request({
            method: "POST",
            url: "https://automationexercise.com/api/createAccount",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `name=Lucas&email=lucashenrique_teste${Date.now()}@gmail.com&password=lucas123.&title=Mr&birth_date=10&birth_month=5&birth_year=1995&firstname=Lucas&lastname=Henrique&company=MinhaEmpresa&address1=Rua+Principal&address2=Complemento+123&country=Brazil&zipcode=12345678&state=SP&city=São+Paulo&mobile_number=11999999999`,
            failOnStatusCode: false, // permite continuar mesmo com erro (útil em testes)
          }).then((response) => {
            cy.log("Status:", response.status);
            cy.log("Body:", response.body);

            expect(response.status).to.eq(200);
            expect(response.body).to.contain("User created!");
          });
        });
      });

      context("deve deletar conta do usuario", () => {
        it("requisição exclusão", () => {
          cy.request({
            method: "DELETE",
            url: `https://automationexercise.com/api/deleteAccount?email=lucassssssssss@gmail.com&password=lucas123.`,
          }).then((response) => {
            expect(response.status).to.eq(200);

            const json = JSON.parse(response.body); // <-- Corrigido aqui
            expect(json.message).to.eq(
              "Bad request, email parameter is missing in DELETE request."
            );
          });
        });
      });

      it("Deve Retornar detalhes da conta do usuario por e-mail", () => {
        cy.request({
          method: "GET",
          url: "https://automationexercise.com/api/getUserDetailByEmail?email=lucashenrique@gmail.com",
        }).then((response) => {
          expect(response.status).to.eq(200);
          expect(response.body).to.be.a("string");


          
        });
      });
    });
  });
});
