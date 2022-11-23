describe('home', () => {
    
    it('app deve estar online e navegar para pagina login', () => {
        
        cy.visit('https://beta.coodesh.com/') //acessa a url
        cy.get('.space-top-1 > .h1').should('have.text', 'Valide seu potencial para alcançar as melhores oportunidades tech') //validar texto da pagina

        cy.get(':nth-child(4) > .nav-link').click() // acessar o botão de login

        cy.get('a.small').click() //acessa botão para cadastrar conta

        cy.wait(3000) //tempo de espera para carregamento da pagina

        cy.get('#onetrust-accept-btn-handler').click() //aceitar politicas de privacidade

    })

    it('Deve efetuar o cadastro completo', () => {
        
       
        cy.get('#displayName').type("bernardo gutierrez Teste")

        cy.get('#email').type("shawn.tucker@example.com") //deve alterar o email a cada teste

        cy.get('#password').type("Teste123@")

        cy.get('[type="checkbox"]').check({force: true}) //aceita o temos e condições
        cy.wait(2000) //tempo de espera para carregamento da pagina
        cy.get('.align-items-center > .transition-3d-hover').click() //acessa o botão de increva-se

        cy.wait(6000) //tempo de espera para carregamento da pagina
        
        cy.get('#onetrust-accept-btn-handler').click() //aceitar politicas de privacidade

        cy.get(':nth-child(7) > .custom-control > .checkbox-outline__label > .d-block').click()

        cy.get('.rc-slider-rail').click()

        cy.get('select[id="preferences.job_search"]').select('Estou empregado mas busco novos desafios').should('have.value', 'employed_and_searching')

        cy.get('.react-tel-input > .form-control').type("31 997137195")

        cy.get('input[id="address.city"]').type("belo horizonte")

        cy.get('#home-office-integral').click()

        cy.get('.w-100').click({force: true})

        cy.get('.col-lg-12 > .react-select > .css-yk16xz-control > .css-13tza3w').type('cultura{enter}')
        
        cy.get('#race').select('Pessoa Branca').should('have.value', 'white')

        cy.get('#gender').select('Homem').should('have.value', 'male')

        cy.get('#sexual_orientation').select('Heterossexual').should('have.value', 'heterosexual')

        cy.get('select[id="disabilities.type"]').select('Nenhuma deficiência').should('have.value', 'none')

        cy.get('.btn-primary').click()

        cy.get('.h4').should('have.text', 'Scorecard') //validar texto da pagina

        cy.wait(3000) //tempo de espera para carregamento da pagina

        cy.get('.btn-primary').click()

        cy.get(':nth-child(1) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 66.6667%;"]').click()

        cy.get(':nth-child(2) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 33.3333%;"]').click()

        cy.get(':nth-child(3) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 100%;"]').click()

        cy.get(':nth-child(4) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 33.3333%;"]').click()

        cy.get(':nth-child(5) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 100%;"]').click()

        cy.get(':nth-child(7) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 100%;"]').click()

        cy.get(':nth-child(9) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 66.6667%;"]').click()

        cy.get(':nth-child(10) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 100%;"]').click()

        cy.get('.btn-primary').click()

        cy.get(':nth-child(1) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 66.6667%;"]').click()

        cy.get(':nth-child(2) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 100%;"]').click()

        cy.get(':nth-child(5) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 66.6667%;"]').click()

        cy.get(':nth-child(6) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 100%;"]').click()

        cy.get(':nth-child(7) > .px-xs-4 > .rc-slider > .rc-slider-step > [style="width: 4px; height: 18px; border-radius: 0px; transform: translateY(9px); left: 33.3333%;"]').click()


        cy.get('.btn-primary').click()

        cy.wait(3200)

        cy.get('.d-flex > .w-100').click()

        cy.get(':nth-child(3) > .p-3 > .align-items-center').click()

        cy.get('input[placeholder="Buscar"]').type('Space Force Coporações{enter}')
    });

});