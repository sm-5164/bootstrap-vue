import Feedback from './form-valid-feedback'
import { mount } from '@vue/test-utils'

describe('form-valid-feedback', async () => {
  it('default should have tag div', async () => {
    const feedback = mount(Feedback)
    expect(feedback.is('div')).toBe(true)
  })

  it('default should contain base class', async () => {
    const feedback = mount(Feedback)
    expect(feedback.classes()).toContain('valid-feedback')
  })

  it('default should not have class d-block', async () => {
    const feedback = mount(Feedback)
    expect(feedback.classes()).not.toContain('d-block')
  })

  it('default should not have class valid-tooltip', async () => {
    const feedback = mount(Feedback)
    expect(feedback.classes()).not.toContain('valid-tooltip')
  })

  it('default should not have id', async () => {
    const feedback = mount(Feedback)
    expect(feedback.attributes('id')).not.toBeDefined()
  })

  it('default should have user supplied id', async () => {
    const feedback = mount(Feedback, {
      context: {
        props: {
          id: 'foobar'
        }
      }
    })
    expect(feedback.attributes('id')).toBe('foobar')
  })

  it('should have tag small when tag=small', async () => {
    const feedback = mount(Feedback, {
      context: {
        props: {
          tag: 'small'
        }
      }
    })
    expect(feedback.is('small')).toBe(true)
  })

  it('should contain class d-block when force-show is set', async () => {
    const feedback = mount(Feedback, {
      context: {
        props: {
          forceShow: true
        }
      }
    })
    expect(feedback.classes()).toContain('d-block')
  })

  it('should contain class valid-tooltip when tooltip is set', async () => {
    const feedback = mount(Feedback, {
      context: {
        props: {
          tooltip: true
        }
      }
    })
    expect(feedback.classes()).toContain('valid-tooltip')
  })

  it('should not contain class alid-feedback when tooltip is set', async () => {
    const feedback = mount(Feedback, {
      context: {
        props: {
          tooltip: true
        }
      }
    })
    expect(feedback.classes()).not.toContain('valid-feedback')
  })
})
