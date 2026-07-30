# Bee Zero — Landing Page

Sitio estático de Bee Zero con Next.js, TypeScript y Tailwind CSS.

## Páginas

- `/` — Landing principal (Home)
- `/invertir` — Página de inversión con calculadora
- `/drivers` — Página para postular como driver
- `/ultima-milla` — Página de logística de última milla
- `/tecnologia` — Página con nuestras plataformas propias (Beezy, BeeTracked, Beezy Clients)

## Desarrollo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## Assets

Coloca imágenes e iconos exportados de Figma en `public/images/` y `public/icons/` siguiendo la guía en [`public/README-ASSETS.md`](public/README-ASSETS.md).

Mientras falten assets, el sitio muestra placeholders automáticos.

## Calculadora

La lógica está en `lib/calculadora.ts`. Reemplaza la función `calculateInvestment()` con las fórmulas reales cuando las tengas.

## Build

```bash
npm run build
npm start
```
