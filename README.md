# ShopVue 


## About

ShopVue is a simple e-commerce product catalog SPA (Single Page Application). It demonstrates core Vue.js concepts including component composition, routing, props/emits, and lifecycle hooks.

### Features

- **Home** — displays a product grid with a carousel banner
- **Product Details** — full product page with related products
- **About** — static info page
- **404** — not-found fallback view
- Stock management via `handleBuy` (decrements stock on purchase)
- Lifecycle hooks (`onMounted` / `onUnmounted`) with console logging throughout

### Tech Stack

- [Vue 3](https://vuejs.org/) — Composition API with `<script setup>`
- [Vue Router](https://router.vuejs.org/) — client-side routing
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) — dev server & build tool
- [Tailwind CSS](https://tailwindcss.com/) + [DaisyUI](https://daisyui.com/) — styling

### Project Structure

```
src/
├── App.vue              # Root component — holds products state
├── main.ts
├── product.json         # Product data
├── types.ts             # Product type definition
├── components/
│   ├── NavBar.vue
│   ├── Footer.vue
│   ├── CarouselBanner.vue
│   ├── ProductCard.vue
│   └── ProductDetails.vue
├── router/
│   └── index.ts
└── views/
    ├── HomeView.vue
    ├── ProductView.vue
    ├── AboutView.vue
    └── NotFoundView.vue
```

---

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```
