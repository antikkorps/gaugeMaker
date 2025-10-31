# 🎯 Gauge Maker

A user-friendly web application for creating and customizing gauge charts using ECharts, Vue.js, Tailwind CSS v4, and DaisyUI. Generate beautiful gauge visualizations with real-time preview and export them as PNG images.

## ✨ Features

- **Real-time Preview**: See changes instantly as you adjust gauge settings
- **Full Customization**: Modify colors, sizes, ranges, titles, and units
- **Multi-Color Segments**: Create gradient gauges with multiple color ranges (green, orange, red, etc.)
- **Flexible Color Modes**: Switch between single color and multi-color segment modes
- **Easy Export**: Download your gauge as high-quality PNG images
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Built with Tailwind CSS v4 with clean, intuitive interface
- **TypeScript**: Full type safety and better development experience

## 🚀 Quick Start

### Prerequisites

- Node.js 20.19.0 or higher
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd gaugeMaker

# Install dependencies
npm install

# Start development server
npm run dev
```

The application will be available at `http://localhost:5173`

## 🛠️ Technology Stack

- **Frontend Framework**: Vue.js 3 with Composition API
- **Chart Library**: ECharts (gauge-stage configuration)
- **Styling**: Tailwind CSS v4 with DaisyUI components
- **Build Tool**: Vite
- **TypeScript**: Full TypeScript support
- **Testing**: Vitest for unit tests, Playwright for E2E tests
- **Linting**: ESLint with Prettier

## 📁 Project Structure

```
src/
├── components/          # Vue components
│   ├── GaugeChart.vue  # Main gauge chart component
│   └── ControlPanel.vue # Configuration controls
├── composables/         # Vue composables
│   └── useGauge.ts     # Gauge state management
├── types/              # TypeScript type definitions
│   └── gauge.ts        # Gauge configuration types
├── assets/             # Static assets
│   └── main.css        # Global styles
├── __tests__/          # Test files
└── App.vue             # Main application component
```

## 🎮 Usage

1. **Configure Your Gauge**: Use the control panel to adjust:
   - Title and unit display
   - Value range (min, max, current)
   - Color mode: single color or multi-color segments
   - Color ranges with custom start/end values and colors
   - Size and appearance options

2. **Multi-Color Segments**:
   - Enable "Use Multi-Color Segments" to create gradient gauges
   - Add custom color ranges (e.g., 0-30: green, 30-70: orange, 70-100: red)
   - Adjust range values and colors independently
   - Remove ranges you don't need

3. **Real-time Preview**: Watch your gauge update instantly as you make changes

4. **Export**: Click "Export as PNG" to download your customized gauge

## 🧪 Testing

```bash
# Run unit tests
npm run test:unit

# Run E2E tests
npm run test:e2e

# Run type checking
npm run type-check

# Run linting
npm run lint
```

## 📝 Development

### Adding New Features

1. Create new components in `src/components/`
2. Add composables for shared logic in `src/composables/`
3. Define types in `src/types/`
4. Write tests in `src/__tests__/`

### Code Style

- Follow Vue.js Composition API patterns
- Use TypeScript for type safety
- Comment code in English
- Follow DaisyUI component conventions
- Maintain clean, modular structure

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests for new functionality
5. Run tests and linting
6. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [ECharts](https://echarts.apache.org/) for the powerful charting library
- [Vue.js](https://vuejs.org/) for the reactive frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [DaisyUI](https://daisyui.com/) for beautiful component library

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Playwright](https://playwright.dev)

```sh
# Install browsers for the first run
npx playwright install

# When testing on CI, must build the project first
npm run build

# Runs the end-to-end tests
npm run test:e2e
# Runs the tests only on Chromium
npm run test:e2e -- --project=chromium
# Runs the tests of a specific file
npm run test:e2e -- tests/example.spec.ts
# Runs the tests in debug mode
npm run test:e2e -- --debug
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
