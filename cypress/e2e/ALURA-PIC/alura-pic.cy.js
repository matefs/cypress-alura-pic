describe('Login e registro de usuário usando o alura-pic', () => {
    
    
    beforeEach(() => {
        cy.visit('/')
    })

    it('verifica mensagens validacao ', () => { 
        cy.contains('a','Register now').click();
        cy.wait(1000)
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Email is required').should('be.visible')
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Full name is required!').should('be.visible')
        cy.contains('ap-vmessage','User name is required!').should('be.visible')
        cy.contains('ap-vmessage','Password is required!').should('be.visible')
    })

    it('Verifica mensagem de email invalido',()=> {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="email"]').type('Mateus');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Invalid e-mail').should('be.visible')
    })

    it('Verifica mensagem de senha maior que 8 dígitos',() => {
        cy.contains('a','Register now').click();
        cy.contains('button','Register').click();
        cy.get('input[formcontrolname="password"]').type('123');
        cy.contains('button','Register').click();
        cy.contains('ap-vmessage','Mininum length is 8').should('be.visible')
    })

    it.only('Fazer login de usuário válido ', () => {
        cy.login(Cypress.env('userName'),Cypress.env('password'))
        cy.get('button[type=submit]').click();
        cy.contains('a','(Logout)').should('be.visible');

        
    })

    it('Fazer login de usuário inválido ', () => {
        cy.login('Mateus',1234)
        cy.contains('ap-vmessage','User name is required!').should('be.visible')
        cy.contains('ap-vmessage','Password is required!').should('be.visible')
    })



    const usuarios = require('../../fixtures/usuarios.json')
    usuarios.forEach( usuario => {
        it(`Registrar usuário ${usuario.fullName}`,() => { 
            cy.registrar(usuario.email,usuario.fullName,usuario.userName,usuario.password)
        })
   
    })
        
    





})


