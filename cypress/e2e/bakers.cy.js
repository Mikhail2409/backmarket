describe('Tests automatisés', () => {
  it('successful registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('input[id="firstName"]').type('Mikhail')
    cy.get('input[id="lastName"]').type('Li')
    cy.get('input[id="signup-email"]').type('mikhail1234@gmail.fr')
    cy.get('input[id="signup-password"]').type('Ll123456')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })
  it('failed registration', () => {
    cy.visit('https://preprod.backmarket.fr/register')    
    cy.get('input[id="firstName"]').type('Mikhail')
    cy.get('input[id="lastName"]').type('Li')
    cy.get('input[id="signup-email"]').type('mikhail1234@gmail.fr')
    cy.get('input[id="signup-password"]').type('123456')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
    cy.contains('p', 'Au moins 8 caractères, dont 1 majuscule, 1 minuscule et 1 chiffre').should('be.visible')
  })
  it('authentication', () => {
    cy.visit('https://preprod.backmarket.fr/register')
    cy.get('input[id="signup-email"]').type('mikhail1234@gmail.fr')
    cy.get('input[id="signup-password"]').type('Ll123456')
    cy.get('[data-qa="signup-submit-button"] > .MkLAMntR > ._2GvJDBxS').click()
  })
  
})
