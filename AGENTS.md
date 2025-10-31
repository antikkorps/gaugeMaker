# Gauge Maker Project - AI Agents Guide

## Project Overview

A web application for generating and customizing gauge charts using ECharts, Vue.js, Tailwind v4, and DaisyUI. Users can modify gauge values in real-time and download the result as PNG.

## Technology Stack

- **Frontend**: Vue.js 3 with Composition API
- **Charts**: ECharts (gauge-stage configuration)
- **Styling**: Tailwind CSS v4 with DaisyUI components
- **Build Tool**: Vite
- **Testing**: Vitest + Playwright for E2E
- **TypeScript**: Full TypeScript support

## Key Features

1. Real-time gauge customization
2. Live preview updates
3. PNG export functionality
4. User-friendly interface inspired by ECharts editor

## Development Guidelines

- Follow Vue.js composition API patterns
- Use TypeScript for type safety
- Implement responsive design with Tailwind v4
- Comment code in English
- Follow DaisyUI component conventions
- Maintain clean, modular component structure

## File Structure Conventions

- Components in `src/components/`
- Composables in `src/composables/`
- Types in `src/types/`
- Utilities in `src/utils/`
- Assets in `src/assets/`

## Testing Strategy

- Unit tests with Vitest for components and utilities
- E2E tests with Playwright for user flows
- Test coverage for gauge generation and export functionality
