/// <Reference types="cypress" />
describe('Test Suite 1', () => {
    it('My First Test', () => {
        cy.log('Test1 is running');
        cy.visit('https://www.youtube.com');
        cy.log('Navigated to YouTube');
        cy.get('input[placeholder="Search"]').type('javascript by testers talk');
        cy.get('.ytSearchboxComponentSearchButton').click();
        cy.log('Test1 is completed');
    });
});
