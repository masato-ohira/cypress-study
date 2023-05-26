describe('bmiForm', () => {
  it('bmi計算フォームは期待通りレンダリングされている', () => {
    cy.visit('https://nextjs-jest-study.vercel.app/bmi/')
    cy.get('label').should('contain', '身長')
    cy.get('label').should('contain', '体重')
    cy.get('input[type="number"]').should('exist')
  })

  it('bmiの計算結果は正しい', () => {
    const height = '170'
    const weight = '50'
    const expected = '17.3011'

    cy.visit('https://nextjs-jest-study.vercel.app/bmi/')
    cy.get('input[data-testid="bmi-input-height"]').type(height)
    cy.get('input[data-testid="bmi-input-weight"]').type(weight)
    cy.contains(expected).should('be.visible')
  })

  it('bmiの判定結果は普通体重である', () => {
    const height = '170'
    const weight = '70'
    const expected = '普通体重'

    cy.visit('https://nextjs-jest-study.vercel.app/bmi/')
    cy.get('input[data-testid="bmi-input-height"]').type(height)
    cy.get('input[data-testid="bmi-input-weight"]').type(weight)
    cy.get('[data-testid="bmi-form-result"]')
      .contains(expected)
      .should('be.visible')
  })

  it('誤った身長を入力したケース', () => {
    const expected = '計算できませんでした'

    cy.visit('https://nextjs-jest-study.vercel.app/bmi/')
    cy.get('input[data-testid="bmi-input-height"]').type('AAA')
    cy.get('input[data-testid="bmi-input-weight"]').type('50')
    cy.contains(expected).should('be.visible')
  })

  it('誤った体重を入力したケース', () => {
    const expected = '計算できませんでした'
    cy.visit('https://nextjs-jest-study.vercel.app/bmi/')
    cy.get('input[data-testid="bmi-input-height"]').type('50')
    cy.get('input[data-testid="bmi-input-weight"]').type('AAA')
    cy.contains(expected).should('be.visible')
  })

  it('誤って文字列を入力したケース', () => {
    const expected = '計算できませんでした'
    cy.visit('https://nextjs-jest-study.vercel.app/bmi/')
    cy.get('input[data-testid="bmi-input-height"]').type('AAA')
    cy.get('input[data-testid="bmi-input-weight"]').type('AAA')
    cy.contains(expected).should('be.visible')
  })
})
