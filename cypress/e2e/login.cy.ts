describe('bmiForm', () => {
  it('正しいIDとパスワードを入力しログインできる', () => {
    cy.visit('https://nextjs-login-study.vercel.app/')

    const username = Cypress.env('MT_USER')
    const password = Cypress.env('MT_PASS')

    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('button').click()
    cy.url().should('eq', 'https://nextjs-login-study.vercel.app/mypage/')
  })

  it('間違ったIDとパスワードでログインできない', () => {
    cy.visit('https://nextjs-login-study.vercel.app/')

    cy.get('input[name="username"]').type('username')
    cy.get('input[name="password"]').type('password')
    cy.get('button').click()
    cy.url().should('not.eq', 'https://nextjs-login-study.vercel.app/mypage/')
  })
})
