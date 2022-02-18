import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'

describe('Signup', () => {

    // beforeEach( function() {
    //     cy.fixture('entregador').then( function(e) {
    //         this.entregador = e
    //     })
    // })

    it('Cadastro para se tornar um entregador', function(){

        var entregador = signupFactory.entregador()

        signup.go()
        signup.fillForm(entregador)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'        
        signup.modalContentShouldBe(expectedMessage)

    })

    it('Cpf incorreto', function(){

        var entregador = signupFactory.entregador()

        entregador.cpf = '090098098aa'

        signup.go()
        signup.fillForm(entregador)
        signup.submit()

        signup.alertMessageShouldBe('Oops! CPF inválido')

    })

    it('Email incorreto', function(){

        var entregador = signupFactory.entregador()

        entregador.email = 'user.com.br'

        signup.go()
        signup.fillForm(entregador)
        signup.submit()

        signup.alertMessageShouldBe('Oops! Email com formato inválido.')

    })
      context('Campos obrigatorios', function() {

        const messages = [

            {field: 'nome', output: 'É necessário informar o nome'},
            {field: 'cpf', output: 'É necessário informar o CPF'},
            {field: 'email', output: 'É necessário informar o email'},
            {field: 'cep', output: 'É necessário informar o CEP'},
            {field: 'numero', output: 'É necessário informar o número do endereço'},
            {field: 'metodo_entrega', output: 'Selecione o método de entrega'},
            {field: 'cnh', output: 'Adicione uma foto da sua CNH'}

        ]

        before(function(){
            signup.go()
            signup.submit()

        })

        messages.forEach(function(msg){

            it(`${msg.field}is required`, function(){
                signup.alertMessageShouldBe(msg.output)
            })

        })


    })


    // it('Campos obrigatorios', function(){

    //     signup.go()
    //     signup.submit()

    //     signup.alertMessageShouldBe('É necessário informar o nome')
    //     signup.alertMessageShouldBe('É necessário informar o CPF')
    //     signup.alertMessageShouldBe('É necessário informar o email')
    //     signup.alertMessageShouldBe('É necessário informar o CEP')
    //     signup.alertMessageShouldBe('É necessário informar o número do endereço')
    //     signup.alertMessageShouldBe('Selecione o método de entrega')
    //     signup.alertMessageShouldBe('Adicione uma foto da sua CNH')
    // })


})