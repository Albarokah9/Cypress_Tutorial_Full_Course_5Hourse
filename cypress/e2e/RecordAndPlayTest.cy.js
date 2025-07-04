/// <Reference types="cypress" />

describe('Record and Play Test', () => {
    it('LoginOrangeHRM.com', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('A');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').clear('a');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123');
        cy.get('.oxd-button').click();
        /* ==== End Cypress Studio ==== */
    });

    /* ==== Test Created with Cypress Studio ==== */
    it('LoginSoapleasure.com', function () {
        /* ==== Generated with Cypress Studio ==== */
        cy.visit('https://soapleasure.com/');
        cy.get('[href="/account/login"] > u').click();
        cy.get('#input-email').click();
        cy.get('#input-email').clear('t');
        cy.get('#input-email').type('test@gmail.com');
        cy.get('#input-password').clear('C');
        cy.get('#input-password').type('Cobatest');
        cy.get('.btn').click();
        /* ==== End Cypress Studio ==== */
    });
});
