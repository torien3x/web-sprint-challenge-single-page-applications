describe("Pizza delivery App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    });

    it('should navigate to the about page', () => {
        cy.contains('Pizza?').click();
        cy.url().should('include', '/');
        cy.contains('Build Your Own Pizza');
    });
})


describe("Pizza delivery App Form", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/pizza")
    }) 
    
    it('should select an option from the dropdown', () => {
        cy.get('#size-dropdown').select('small');
        cy.get('#size-dropdown').should('have.value', 'small');
    })

    it('should select an option from sauce', () => {
        cy.get('#name-input').check();
        cy.get('#name-input').should('be.checked');
    })
    
    it('should select an option from topping checkbox', () => {
        cy.get('#pizza-toppings').check();
        cy.get('#pizza-toppings').should('be.checked');
    })
    
    it('should select an option from topping checkbox', () => {
        cy.get('#substitution-check').check();
        cy.get('#substitution-check').should('be.checked');
    })

    it('should type into a text input and display the value', () => {
        cy.get('#special-text').type('extra sauce');
        cy.get('#special-text').should('have.value', 'extra sauce');
    })    
    
    it('should input into quantity box nd display the value', () => {
        cy.get('#quantityBox').type('quantity');
        cy.get('#quantityBox').should('have.value', 1);
    }) 
    
    it('should submit the form', () => {
        cy.get('#size-dropdown').select('small');
        cy.get('#name-input').check();
        cy.get('#pizza-toppings').check();
        cy.get('#substitution-check').check();
        cy.get('#special-text').type('extra sauce');
        cy.get('#quantityBox').type('quantity');
        cy.get('button[type="submit"]').click();
    })
}) 