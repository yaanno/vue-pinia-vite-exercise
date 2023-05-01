import MainPage from './MainPage.vue'

describe('<MainPage />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(MainPage)
  })
})