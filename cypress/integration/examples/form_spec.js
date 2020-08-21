describe('Inputs, submit button', () => {
    it('can navigate to http://localhost:1234', () => {
      cy.visit('http://localhost:3000')
      cy.url().should('include', 'localhost')
    })
    it('clicks the button', () => {
        cy.get('#pizza').click()
    })
    it('selects a size', () =>{
        cy.get('#size').select('small')
    })

    it('selects a sauce', () =>{
        cy.get('#sauce').first().check()
    })

    it('selects a pepperoni', () =>{
        cy.get('#pepperoni').check()
    })

    it('selects a tomatoes', () =>{
        cy.get('#tomatoes').check()
    })

    it('enters intructions', () =>{
        cy.get('#instructions').type('so many thoughts')
    })

    it('enters a name', () =>{
        cy.get('#name').type('Mr. Bojangles')
    })

    it('submits', () =>{
        cy.get('#submit').click()
    })

})