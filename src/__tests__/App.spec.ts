import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import App from '../App.vue'

// Mock ECharts for App component
const mockChart = {
  setOption: vi.fn(),
  dispose: vi.fn(),
  getDataURL: vi.fn(() => 'data:image/png;base64,mock'),
  resize: vi.fn(),
}

vi.mock('echarts', () => ({
  init: vi.fn(() => mockChart),
  default: {
    init: vi.fn(() => mockChart),
  },
}))

describe('App', () => {
  beforeEach(() => {
    // Mock DOM methods
    Object.defineProperty(HTMLElement.prototype, 'clientWidth', { value: 300 })
    Object.defineProperty(HTMLElement.prototype, 'clientHeight', { value: 300 })
  })

  it('mounts renders properly', () => {
    const wrapper = mount(App)
    expect(wrapper.text()).toContain('Gauge Maker')
    expect(wrapper.text()).toContain('Live Preview')
    expect(wrapper.text()).toContain('Gauge Configuration')
  })
})
