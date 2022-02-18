
var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    entregador: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()


        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            endereco: {
                cep:'05386020',
                rua: 'Rua José de Andrade Moraes',
                numero: '442',
                complemento: 'casa 2',
                bairro: 'Vila Adalgisa',
                cidade_uf: 'São Paulo/SP'
            },
            metodo_entrega: 'Moto',
            cnh:'cnh-digital.jpg'
        }

        return data

    }
}