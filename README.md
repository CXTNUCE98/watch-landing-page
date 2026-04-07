# ClockWork Landing Page

A modern, responsive clock landing page built with Nuxt 3, Vue 3, and UnoCSS following Clean Architecture principles.

## 🏗️ Architecture

### Project Structure

```
Clock-landing-page/
├── i18n/
│   └── locales/              # Translation files (vi.json, en.json)
├── src/
│   ├── assets/               # Static assets (images, fonts)
│   │   └── images/
│   ├── components/
│   │   ├── common/           # Reusable UI components (BaseButton, BaseCard)
│   │   ├── layout/           # Layout components (Header, Footer, DefaultLayout)
│   │   └── sections/         # Landing page sections (Hero, Features, etc.)
│   ├── composables/          # Vue composables (useTheme)
│   ├── constants/            # App constants (navigation.ts)
│   ├── locales/              # i18n locale files
│   ├── pages/                # Route pages (index.vue)
│   ├── plugins/              # Nuxt plugins
│   ├── types/                # TypeScript interfaces (landing.ts)
│   └── app.vue               # Root component
├── nuxt.config.ts            # Nuxt configuration
├── uno.config.ts             # UnoCSS configuration
├── package.json              # Dependencies
└── .env                      # Environment variables
```

### Clean Architecture Layers

1. **Presentation Layer** (`src/components/`, `src/pages/`)
   - UI components organized by purpose
   - Page components for routing
   - Section components for landing page sections

2. **Business Logic Layer** (`src/composables/`)
   - Reusable Vue composables
   - Theme management with `useTheme()`
   - Future: Auth, API clients, etc.

3. **Domain Layer** (`src/types/`, `src/constants/`)
   - TypeScript interfaces and types
   - Application constants
   - Navigation configuration

4. **Infrastructure Layer** (`src/plugins/`, `src/utils/`)
   - Nuxt plugins
   - Utility functions
   - External service integrations

## 🎨 UI/UX Design

### Design System

- **Color Palette**: Blue gradient primary (#3B82F6 → #2563EB), Slate neutrals
- **Typography**: Plus Jakarta Sans (body), Outfit (headings)
- **Components**: Glassmorphism cards, gradient buttons, smooth transitions
- **Animations**: Float, fadeIn, bounceIn (configured in UnoCSS)

### Component Library

#### Common Components
- `BaseButton`: Variant-based button (primary, secondary, outline, ghost)
- `BaseCard`: Flexible card with hover states and padding options

#### Layout Components
- `Header`: Sticky header with glassmorphism, mobile-responsive menu
- `Footer`: Multi-column footer with social links
- `DefaultLayout`: Main layout wrapper

#### Section Components
- `HeroSection`: Hero with animated background, stats, CTA buttons
- `FeaturesSection`: Feature grid with icons
- `HowItWorksSection`: Step-by-step guide
- `PricingSection`: Pricing cards with highlighted plan

## 🛠️ Tech Stack

### Core
- **Nuxt 3** (v3.11.1) - Full-stack Vue framework
- **Vue 3** (v3.4.21) - Reactive UI framework
- **TypeScript** - Type safety

### Styling
- **UnoCSS** - Atomic CSS framework
- **Boxicons** - Icon library
- **Element Plus** - UI component library (for dialogs, messages)

### Features
- **@nuxtjs/i18n** - Internationalization (VI/EN)
- **@nuxtjs/color-mode** - Dark/Light theme
- **@vueuse/nuxt** - Vue composition utilities

## 🚀 Getting Started

### Prerequisites
- Node.js >= 18
- npm or yarn

### Installation

```bash
# Install dependencies
pnpm install

# Run dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

### Configuration

Edit `.env` for environment variables:
```env
NUXT_PUBLIC_API_BASE=http://localhost:3001
```

## 📝 Adding New Features

### Adding a New Section

1. Create component in `src/components/sections/`
```vue
<!-- TestimonialsSection.vue -->
<script setup lang="ts">
const { t } = useI18n()
// Your logic
</script>

<template>
  <section id="testimonials" class="py-20">
    <!-- Content -->
  </section>
</template>
```

2. Add to `src/pages/index.vue`:
```vue
<TestimonialsSection />
```

3. Add translations to `i18n/locales/vi.json` and `en.json`

### Adding a New Composable

Create in `src/composables/`:
```typescript
// src/composables/useAuth.ts
export const useAuth = () => {
  // Auth logic
  return { user, login, logout }
}
```

Auto-imported by Nuxt - use directly in components.

### Adding a New Route

1. Create page in `src/pages/`:
```vue
<!-- src/pages/about.vue -->
<template>
  <NuxtLayout>
    <h1>About Page</h1>
  </NuxtLayout>
</template>
```

2. Link to it:
```vue
<NuxtLink :to="localePath('/about')">About</NuxtLink>
```

## 🌐 Internationalization

Add new locale:
1. Create `i18n/locales/{code}.json`
2. Register in `nuxt.config.ts`:
```ts
locales: [
  { code: "vi", file: "vi.json" },
  { code: "en", file: "en.json" },
  { code: "fr", file: "fr.json" } // New
]
```

## 🎨 Customizing Theme

Edit `uno.config.ts`:

### Colors
```ts
theme: {
  colors: {
    primary: { /* ... */ }
  }
}
```

### Shortcuts (Utility Classes)
```ts
shortcuts: [
  ["btn-primary", "bg-blue-600 px-6 py-3 rounded-xl"]
]
```

### Custom Animations
```ts
preflights: [{
  getCSS: () => `
    @keyframes customAnimation { /* ... */ }
  `
}]
```

## 📦 Bundle Analysis

```bash
pnpm build -- --analyze
```

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Change port
PORT=3001 pnpm dev
```

### CSS Not Working in Production
- Check UnoCSS safelist for dynamic classes
- Ensure proper dark mode classes

### i18n Keys Not Translating
- Verify key exists in both `vi.json` and `en.json`
- Check `useI18n()` is called in `<script setup>`

## 📄 License

MIT License
