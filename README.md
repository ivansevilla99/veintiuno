# veintiunoapp.com

Web de Veintiuno (Astro 5, estática). Se publica sola en GitHub Pages al hacer push a `main`.

- `npm run dev` — servidor local en http://localhost:4321
- `npm run build` — genera `dist/`
- Rutas y textos comunes: `src/lib/site.ts` (las dos URLs de cada página viven ahí)
- Tabla de estrategia: `src/lib/strategy.ts`, portada del motor de la app (`StrategyTable.swift`). Si cambia una, cambia la otra.
- Páginas legales: `src/legal/*.json` (las enlaza la app y la ficha de App Store: no cambiar sus rutas).
