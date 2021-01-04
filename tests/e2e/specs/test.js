// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
	beforeEach(() => {
		cy.visit('/');
	});

	it('should have working number buttons', () => {
		cy.get('#number2').click();
		cy.get('.display').should('contain', '2');
	});

	it('should have number buttons that update display of running total', () => {
		cy.get('#number6').click();
		cy.get('#number2').click();
		cy.get('#number1').click();
		cy.get('.display').should('contain', '621');
	});

	it('should update display result when operator clicked', () => {
		cy.get('#number6').click();
		cy.get('#operator_add').click();
		cy.get('#number2').click();
		cy.get('#operator_add').click();
		cy.get('.display').should('contain', '8');
	});

	it('should be able to chain multiple operations together', () => {
		cy.get('#number6').click();
		cy.get('#operator_add').click();
		cy.get('#number2').click();
		cy.get('#operator_subtract').click();
		cy.get('#number4').click();
		cy.get('#operator_multiply').click();
		cy.get('#number3').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', '12');
	});

	it('should be able to work with negative numbers', () => {
		cy.get('#number6').click();
		cy.get('#operator_subtract').click();
		cy.get('#number9').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', '-3');
	});

	it('should get Infinity at large numbers', () => {
		cy.get('#number6').click();
		cy.get('#operator_multiply').click();
		cy.get('#number1').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#number0').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', 'Infinity');
	});

	it('should get undefined when dividing by zero', () => {
		cy.get('#number1').click();
		cy.get('#operator_divide').click();
		cy.get('#number0').click();
		cy.get('#operator_equals').click();
		cy.get('.display').should('contain', 'Undefined');
	});
});
