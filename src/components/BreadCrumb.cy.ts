import BreadCrumb from './BreadCrumb.vue'

describe('<BreadCrumb />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(BreadCrumb)
  })
})