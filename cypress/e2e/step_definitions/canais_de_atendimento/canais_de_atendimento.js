import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("I'm on the main IBGE page", () => {
    cy.visit("https://www.ibge.gov.br/pt/inicio.html?lang=pt-BR")
})

When('Click on canais de atendimento', () => {
    cy.get(':nth-child(2) > :nth-child(1) > .texto--branco').click()
    cy.get('.rodape-links > :nth-child(2) > :nth-child(1) > ul > :nth-child(1) > a').click()
})

Then('Redirects to the atendimento page', () => {
    cy.get('.conteudo__interna__titulo > h2')
})

When('Fill in the mandatory fields', () => {
    cy.get('#authorName').type('Rafael')
    cy.get('#authorEmail').type('Rafael.teste@gmail.com')
    cy.get('#category').select('GEOGRAPHY')
    cy.get('#title').type('Teste para Projeto de Qualidade de Software')
    cy.get('#message').type('Este é um teste para o projeto da disciplina de Qualidade de Software')
    cy.get('.btn-danger').click()
})

Then('The fields must be empty', () => {
    cy.get('#authorName').should('have.value', '');
})