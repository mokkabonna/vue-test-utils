import { mount } from '~vue-test-utils'
import { compileToFunctions } from 'vue-template-compiler'
import Component from '~resources/components/component.vue'

describe('name', () => {
  it('returns the name of the component it was called on', () => {
    const wrapper = mount(Component)
    expect(wrapper.name()).to.equal('component')
  })

  it('returns the name of the tag if there is no vnode', () => {
    const TestComponent = {
      render (createElement) {
        return createElement('div', {
          domProps: {
            innerHTML: '<svg></svg>'
          }
        })
      }
    }
    const wrapper = mount(TestComponent)
    expect(wrapper.find('svg').name()).to.equal('svg')
  })

  it('returns the tag name of the element if it is not a Vue component', () => {
    const compiled = compileToFunctions('<div><p /></div>')
    const wrapper = mount(compiled)
    expect(wrapper.find('p').name()).to.equal('p')
  })
})
