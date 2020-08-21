describe('Inputs, submit button', () => {
    it('can navigate to http://localhost:1234', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })
    it('clicks the button', () => {
        cy.get('#pizza').click()
    })
    it('selects a size', () =>{
        cy.get('#size').select('input[value="small"]')
    })

    it('selects a size', () =>{
        cy.get('#size').select('input[name="small"]')
    })
})