describe('import vue components', () => {
  test('normal imports as expected', async () => {
    const cmp = await import('../src/App.vue')
    expect(cmp).toBeDefined()
    expect(cmp).toMatchSnapshot()
  })
})
