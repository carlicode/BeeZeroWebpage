# Assets de Bee Zero

## Estado actual

Los assets de **Home** ya fueron extraídos del export de Figma (`figma-to-html/`) y están integrados en el sitio:

| Archivo | Estado |
|---------|--------|
| `images/shared/logo.png` | ✅ Integrado |
| `images/home/hero-car.png` | ✅ Integrado |
| `images/home/quienes-somos-illustration.png` | ✅ Integrado |
| `images/home/triple-impacto-diagram.png` | ✅ Integrado |
| `images/home/team-alejandra.png` | ✅ Integrado |
| `images/home/team-andrea.png` | ✅ Integrado |
| `images/home/team-carli.png` | ✅ Integrado |
| `images/home/team-shape.png` | ✅ Integrado (forma decorativa detrás de fotos, y placeholder de Miguel) |
| `icons/home/icon-invertir.png` | ✅ Integrado |
| `icons/home/icon-trabajar.png` | ✅ Integrado |
| `icons/home/icon-delegar.png` | ✅ Integrado |
| `icons/shared/facebook.png` `instagram.png` `linkedin.png` `whatsapp.png` | ✅ Integrado |
| `images/home/team-miguel.png` | ⏳ Falta (usa la forma amarilla como placeholder) |

## Invertir — integrado desde `INVERTIR-figma-to-html`

| Archivo | Estado |
|---------|--------|
| `images/invertir/hero-illustration.png` | ✅ Integrado (mano con monedas) |
| `images/invertir/calculadora-icon.png` | ✅ Integrado (calculadora con abeja) |
| `icons/invertir/beneficio-icon.png` | ✅ Integrado (regalo con estrellas) |

## Cómo agregar más assets

1. Exporta desde Figma (o pega el export de `figma-to-html` en la raíz del proyecto).
2. Colócalos con el nombre esperado en `public/images/...` o `public/icons/...`.
3. Recarga el navegador — no hace falta tocar código.

## Formatos recomendados

- **PNG** con transparencia para fotos recortadas, iconos e ilustraciones.
- **SVG** para logos/iconos vectoriales simples cuando sea posible (más liviano).
