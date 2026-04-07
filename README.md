# LUXE Timepieces - Luxury Watch Landing Page

A modern, responsive luxury watch landing page built with Nuxt 3, Vue 3, and UnoCSS featuring an elegant dark theme with gold accents.

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

- **Color Palette**: Gold primary (#D4AF37), Black (#1A1A1A), Slate neutrals
- **Typography**: Playfair Display (headings), Cormorant Garamond (elegant text), Inter (body)
- **Components**: Luxury cards with hover effects, gold gradient buttons, smooth animations
- **Animations**: Fade-in, scale, float, shimmer, glow effects (configured in UnoCSS)

### Component Library

#### Common Components

- `BaseButton`: Variant-based button (primary, secondary, ghost)
- `BaseCard`: Flexible card with luxury hover states

#### Layout Components

- `Header`: Sticky header with gold logo, mobile-responsive navigation
- `Footer`: Multi-column footer with contact info and social links

#### Section Components

- `HeroSection`: Full-screen hero with animated circles, stats, watch display
- `FeaturesSection`: Feature grid (Authentic, Warranty, Shipping, Returns)
- `CollectionsSection`: Product grid with badges, hover overlays
- `FeaturedSection`: Large featured product + smaller items
- `AboutSection`: Company story with highlights
- `ContactSection`: Contact form with gold focus states

## 🛠️ Tech Stack

### Core

- **Nuxt 3** (v3.11.1) - Full-stack Vue framework
- **Vue 3** (v3.4.21) - Reactive UI framework
- **TypeScript** - Type safety

### Styling

- **UnoCSS** - Atomic CSS framework
- **Boxicons** - Icon library
- **Element Plus** - UI component library (for dialogs, messages)

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

The app is configured with:
- **SSR enabled** for better SEO and performance
- **Internationalization** support (Vietnamese default, English)
- **Color mode** set to light preference
- **Auto-imports** for composables and constants

## 📝 Adding New Features

### Adding a New Watch Product

1. Add product data to your state/composable
2. Update the collections grid in `CollectionsSection.vue`
3. Add product image to `src/assets/images/`
4. Update translations in `i18n/locales/vi.json` and `en.json`

### Adding a New Section

1. Create component in `src/components/sections/`

```vue
<!-- TestimonialsSection.vue -->
<script setup lang="ts">
const { t } = useI18n();
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
  return { user, login, logout };
};
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
  { code: "vi", name: "Tiếng Việt", file: "vi.json" },
  { code: "en", name: "English", file: "en.json" },
  { code: "fr", name: "Français", file: "fr.json" }, // New
];
```

Current supported languages:
- **Tiếng Việt** (default)
- **English**

## 🎨 Customizing Theme

Edit `uno.config.ts`:

### Colors

```ts
theme: {
  colors: {
    gold: {
      500: "#D4AF37",  // Change gold color
    }
  }
}
```

### Shortcuts (Utility Classes)

```ts
shortcuts: [
  ["btn-primary", "bg-gradient-to-r from-gold-500 to-gold-600"],
  ["luxury-card", "bg-dark-900 border border-gold-500/20 hover:border-gold-500/50"]
];
```

### Custom Animations

```ts
preflights: [
  {
    getCSS: () => `
    @keyframes customAnimation { /* ... */ }
  `,
  },
];
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

### Images Not Showing

- Check image paths are correct (`~/assets/images/`)
- Verify images exist in the assets folder
- Use `<NuxtImg>` for optimized images

### CSS Not Working in Production

- Check UnoCSS safelist for dynamic classes
- Ensure proper dark mode classes

### i18n Keys Not Translating

- Verify key exists in both `vi.json` and `en.json`
- Check `useI18n()` is called in `<script setup>`

## 📸 Image Placeholders

The project currently uses emoji (⌚) as placeholders for watch images. To add real images:

1. Add images to `src/assets/images/`
2. Replace emoji with `<img>` or `<NuxtImg>` in components
3. Example:
```vue
<img src="~/assets/images/rolex-submariner.jpg" alt="Rolex Submariner">
```

## 🔮 Next Steps

1. **Product Detail Page**: Create individual product pages
2. **Shopping Cart**: Add cart functionality with state management
3. **Checkout Flow**: Payment integration
4. **User Authentication**: Login/Register system
5. **Wishlist**: Save favorite products
6. **Search & Filter**: Product search and filtering
7. **Testimonials Section**: Customer reviews
8. **Newsletter Signup**: Email subscription
9. **Live Chat**: Customer support chat
10. **Real Images**: Replace placeholders with actual product photos

## 📄 License

MIT License

---

**Built with ❤️ for luxury watch enthusiasts**
