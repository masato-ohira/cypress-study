describe('myPhotoList', () => {
  it('APIの出力結果は正しい', () => {
    cy.visit('https://nextjs-jest-study.vercel.app/posts/')
    cy.get('[data-testid="my-photo-list"]')
      .should('exist')
      .find('img')
      .should('have.length', 50)
  })
})
