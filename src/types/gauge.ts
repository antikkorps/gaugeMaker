/**
 * Color range configuration for gauge segments
 */
export interface ColorRange {
  /** Start value of this color range */
  start: number
  /** End value of this color range */
  end: number
  /** Color for this range */
  color: string
}

/**
 * Gauge configuration interface for ECharts gauge chart
 */
export interface GaugeConfig {
  /** Current value of the gauge */
  value: number
  /** Minimum value of the gauge */
  min: number
  /** Maximum value of the gauge */
  max: number
  /** Title of the gauge */
  title: string
  /** Unit display */
  unit: string
  /** Primary color for the gauge (fallback) */
  color: string
  /** Background color */
  backgroundColor: string
  /** Show gauge details */
  showDetail: boolean
  /** Gauge size */
  size: number
  /** Color ranges for different segments */
  colorRanges: ColorRange[]
  /** Use gradient colors */
  useGradient: boolean
}

/**
 * Default gauge configuration
 */
export const defaultGaugeConfig: GaugeConfig = {
  value: 65,
  min: 0,
  max: 100,
  title: 'Speed',
  unit: 'km/h',
  color: '#3b82f6',
  backgroundColor: '#f1f5f9',
  showDetail: true,
  size: 400,
  colorRanges: [
    { start: 0, end: 30, color: '#22c55e' }, // Green
    { start: 30, end: 70, color: '#f59e0b' }, // Orange
    { start: 70, end: 100, color: '#ef4444' }, // Red
  ],
  useGradient: true,
}
