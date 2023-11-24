describe("Pizza delivery App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    });

    it('should navigate to the about page', () => {
        cy.contains('Pizza?').click();
        cy.url().should('include', '/pizza/Form');
        cy.contains('Build Your Own Pizza');
    });
})