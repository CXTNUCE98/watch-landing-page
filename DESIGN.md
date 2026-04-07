# LUXE Timepieces - Luxury Watch Landing Page

Website bán đồng hồ cao cấp với thiết kế sang trọng, hiện đại và đầy đủ responsive.

## 🎨 Thiết kế UI/UX

### Màu sắc chủ đạo
- **Gold (#D4AF37)**: Màu vàng gold luxury, tạo điểm nhấn sang trọng
- **Primary (#1A1A1A)**: Đen tuyền, nền tối cao cấp
- **Slate**: Xám hiện đại cho text và borders

### Typography
- **Playfair Display**: Headings - font serif sang trọng
- **Cormorant Garamond**: Elegant text - cho quote, testimonial
- **Inter**: Body text - dễ đọc, hiện đại

### Design Principles
- ✨ **Luxury Feel**: Gold accents, dark backgrounds, elegant animations
- 🎯 **Clean Layout**: Grid-based, lots of whitespace
- 💫 **Smooth Animations**: Fade-in, scale, float, rotate effects
- 📱 **Fully Responsive**: Mobile-first design
- 🌙 **Dark Mode Ready**: Built-in dark theme

## 🏗️ Cấu trúc Components

### Layout Components
```
src/components/layout/
├── Header.vue       # Luxury header với gold logo, navigation
└── Footer.vue       # 4-column footer với contact info
```

### Section Components
```
src/components/sections/
├── HeroSection.vue          # Hero với animated circles, stats, watch display
├── FeaturesSection.vue      # 4 features (Authentic, Warranty, Shipping, Returns)
├── CollectionsSection.vue   # Grid 4 đồng hồ với badges, hover effects
├── FeaturedSection.vue      # Featured product lớn + 3 smaller items
├── AboutSection.vue         # About us với highlights
└── ContactSection.vue       # Contact form
```

### Common Components
```
src/components/common/
├── BaseButton.vue   # Button variants
└── BaseCard.vue     # Card wrapper
```

## 🎭 Animations

### CSS Animations (configured in uno.config.ts)
- `animate-fade-in-up`: Fade in từ dưới lên
- `animate-fade-in-down`: Fade in từ trên xuống
- `animate-scale-in`: Scale từ nhỏ lên
- `animate-slide-in-left/right`: Slide từ trái/phải
- `animate-float`: Float lên xuống
- `animate-shimmer`: Shimmer effect
- `animate-glow`: Glow pulse
- `animate-rotate-360`: Xoay 360 độ
- `animate-hero-zoom`: Hero zoom effect

### Delays
- `.delay-100` đến `.delay-600`: Stagger animations

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌐 Internationalization

Hỗ trợ 2 ngôn ngữ:
- **Tiếng Việt** (default): `src/locales/vi.json`
- **English**: `src/locales/en.json`

## 🚀 Routes

```
/                     → Trang chủ (landing page)
/#collections         → Bộ sưu tập
/#featured            → Sản phẩm nổi bật
/#about               → Về chúng tôi
/#contact             → Liên hệ
```

## 🛠️ Tech Stack

- **Nuxt 3**: Framework
- **Vue 3**: UI Library
- **UnoCSS**: Atomic CSS
- **Boxicons**: Icons
- **Element Plus**: Dialogs, Messages
- **i18n**: Internationalization
- **TypeScript**: Type safety

## 📦 Scripts

```bash
pnpm install     # Cài dependencies
pnpm dev         # Chạy dev server (localhost:3000)
pnpm build       # Build production
pnpm preview     # Preview production
```

## 🎯 Components Details

### HeroSection
- Full-screen hero với animated background
- Decorative rotating circles
- Stats section (50+ brands, 10K+ watches, 100% authentic)
- Watch display với floating badges
- Scroll indicator

### FeaturesSection
- 4 features với icons
- Gold border hover effects
- Dark background section

### CollectionsSection
- Grid 4 đồng hồ
- Product badges (New, Bestseller, Limited)
- Hover overlay với Quick View button
- Add to cart button

### FeaturedSection
- Large featured product (left)
- 3 smaller featured items (right)
- Gradient overlay trên ảnh
- CTA buttons

### AboutSection
- 2-column layout
- Decorative borders
- 3 highlights với check icons
- Story content

### ContactSection
- Contact form với validation-ready inputs
- Dark background section
- Gold focus states

## 🎨 UnoCSS Shortcuts

```ts
"btn-primary": Gold gradient button
"btn-secondary": Gold border button
"btn-ghost": Ghost button
"luxury-card": Card với hover effects
"section-title": Large heading
"text-gradient-gold": Gold gradient text
"glass-effect": Glassmorphism
```

## 📝 Customization

### Đổi màu chủ đạo
Edit `uno.config.ts`:
```ts
colors: {
  gold: {
    500: "#YOUR_COLOR",
  }
}
```

### Thêm animation
Thêm vào `preflights` trong `uno.config.ts`:
```ts
@keyframes yourAnimation {
  from { ... }
  to { ... }
}
```

### Đổi fonts
Edit `presetWebFonts` trong `uno.config.ts`

## 🖼️ Image Placeholders

Hiện tại đang dùng emoji ⌚ làm placeholder. Để thay ảnh thật:

1. Thêm ảnh vào `src/assets/images/`
2. Thay thế emoji bằng `<img>` hoặc `<NuxtImg>`
3. Example:
```vue
<img src="~/assets/images/rolex-submariner.jpg" alt="Rolex Submariner">
```

## ⚡ Performance

- **SSR enabled**: Fast initial load
- **Auto-imports**: Tree-shaking
- **Lazy loading**: Components load on demand
- **Optimized animations**: CSS-based, GPU-accelerated

## 🔮 Next Steps (Gợi ý)

1. **Product Detail Page**: Tạo trang chi tiết sản phẩm
2. **Shopping Cart**: Giỏ hàng với state management
3. **Checkout Flow**: Thanh toán
4. **User Authentication**: Đăng nhập/Đăng ký
5. **Wishlist**: Yêu thích
6. **Search & Filter**: Tìm kiếm và lọc sản phẩm
7. **Real Images**: Thay placeholder bằng ảnh thật
8. **Testimonials Section**: Đánh giá khách hàng
9. **Newsletter Signup**: Đăng ký nhận tin
10. **Live Chat**: Chat hỗ trợ

## 📸 Design Inspiration

- Rolex.com
- Audemars Piguet
- Hodinkee Shop
- Tourneau

## 🎨 Color Palette Reference

```
Gold: #D4AF37 (Primary accent)
Gold Light: #FFD700
Gold Dark: #B8860B

Black: #1A1A1A
Black Light: #2D2D2D
Black Dark: #0A0A0A

White: #FFFFFF
Slate 50: #F8FAFC
Slate 900: #0F172A
Slate 950: #020617
```

---

**Built with ❤️ for luxury watch enthusiasts**
