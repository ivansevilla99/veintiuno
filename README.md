# veintiuno

Páginas públicas de **Veintiuno**, la app de iPhone para aprender la estrategia básica del blackjack.

Existen porque la App Store exige una URL de privacidad y una de soporte, y porque los enlaces del paywall tienen que apuntar a algo real.

- Español: `/`, `/privacidad/`, `/terminos/`, `/soporte/`
- English: `/en/`, `/en/privacy/`, `/en/terms/`, `/en/support/`

## Editar

Todo el texto vive en `_build.py`. Se edita ahí y se regenera:

```bash
python3 _build.py
```

No edites los `index.html` a mano: el siguiente build los pisa.

## Dominio propio

Si algún día se compra un dominio, se añade un fichero `CNAME` en la raíz con el
dominio y se apunta el DNS a GitHub Pages. Las rutas no cambian.
