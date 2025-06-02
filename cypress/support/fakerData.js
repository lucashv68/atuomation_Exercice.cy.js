import { faker } from "@faker-js/faker";

export function gerarUsuario(){
    return{
        nome: faker.person.fullName(),
        email: faker.internet.email(),
        senha:faker.internet.password()

    }
}