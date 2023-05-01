import BaseLayout from './BaseLayout.vue'

describe('<BaseLayout />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BaseLayout)
  })
})