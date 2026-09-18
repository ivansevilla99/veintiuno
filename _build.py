# Generates the static pages. Edit the content here, then re-run: python3 _build.py
import os

UPDATED_ES = "18 de septiembre de 2026"
UPDATED_EN = "18 September 2026"
MAIL = "ivan.sevilla.ruano@gmail.com"

def page(lang, depth, title, desc, nav, body, footer):
    root = "../" * depth or "./"
    links = "".join(f'<a href="{root}{h}">{t}</a>' for t, h in nav)
    return f"""<!doctype html>
<html lang="{lang}">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>{title}</title>
<meta name="description" content="{desc}">
<link rel="stylesheet" href="{root}style.css">
</head>
<body>
<div class="wrap">
<header class="site">
  <a class="brand" href="{root}"><span class="mark">21</span> Veintiuno</a>
  <nav>{links}</nav>
</header>
{body}
<footer class="site">{footer}</footer>
</div>
</body>
</html>
"""

NAV_ES = [("Privacidad", "privacidad/"), ("Términos", "terminos/"), ("Soporte", "soporte/"), ("EN", "en/")]
NAV_EN = [("Privacy", "en/privacy/"), ("Terms", "en/terms/"), ("Support", "en/support/"), ("ES", "")]
FOOT_ES = f'Veintiuno · Iván Sevilla · <a href="mailto:{MAIL}">{MAIL}</a>'
FOOT_EN = FOOT_ES

FILES = {}

# ---------------------------------------------------------------- index (es)
FILES["index.html"] = page("es", 0, "Veintiuno · Aprende la estrategia básica del blackjack",
  "Veintiuno es una app de iPhone para aprender y practicar la estrategia básica del blackjack. Sin dinero real y sin apuestas.",
  NAV_ES, f"""
<h1>Aprende a jugar bien al blackjack</h1>
<p class="lead">Veintiuno es una app de iPhone que te enseña la estrategia básica mano a mano, con una ruta de 14 días, exámenes y un consultor que resuelve cualquier jugada.</p>

<div class="card">
<h2 style="margin-top:0">Qué es y qué no es</h2>
<p>Es una herramienta educativa. <strong>No se juega con dinero real</strong>, no hay fichas ni apuestas, y no está vinculada a ningún casino ni a ninguna casa de apuestas.</p>
<p>Usar dispositivos electrónicos en una mesa de blackjack real está prohibido en los casinos y es ilegal en muchas jurisdicciones. Veintiuno está pensada para estudiar en casa, no para llevarla a una mesa.</p>
</div>

<h2>Qué incluye</h2>
<ul>
<li>Mesa de práctica con corrección inmediata jugada a jugada.</li>
<li>Ruta de 14 días: un concepto, un drill y un examen por día.</li>
<li>Tablas de estrategia para distintas reglas (S17/H17, DAS, rendición, con y sin carta oculta).</li>
<li>El conteo Hi-Lo explicado con honestidad: qué es, cuánto vale de verdad y dónde no funciona.</li>
<li>Consultor de manos con valor esperado de cada opción.</li>
<li>Diez idiomas, sonido y vibración cuidados.</li>
</ul>

<h2>Veintiuno Pro</h2>
<p>Los tres primeros días de la ruta son gratis. Veintiuno Pro abre las once lecciones restantes, el consultor de manos y el mapa de calor de tus errores. Los detalles de precio y renovación están en los <a href="terminos/">términos</a>.</p>

<h2>Juego responsable</h2>
<p class="warn">Si el juego ha dejado de ser diversión, pide ayuda. En España: <strong>900 200 225</strong> (línea de atención al jugador, gratuita y confidencial). En otros países, busca el servicio público de tu comunidad.</p>

<ul class="links">
<li><a href="privacidad/">Política de privacidad</a></li>
<li><a href="terminos/">Términos de uso</a></li>
<li><a href="soporte/">Soporte</a></li>
</ul>
""", FOOT_ES)

# ---------------------------------------------------------------- privacidad
FILES["privacidad/index.html"] = page("es", 1, "Privacidad · Veintiuno",
  "Política de privacidad de la app Veintiuno.", NAV_ES, f"""
<h1>Política de privacidad</h1>
<p class="updated">Última actualización: {UPDATED_ES}</p>

<p>Veintiuno está hecha para funcionar sin saber quién eres. No hay cuenta, no hay registro y no te pedimos el correo ni el nombre.</p>

<h2>Qué se queda en tu iPhone</h2>
<p>Tu progreso —decisiones, aciertos, rachas, lecciones completadas y ajustes— se guarda <strong>solo en tu dispositivo</strong>. No se sube a ningún servidor nuestro. Si borras la app, se borra ese historial.</p>

<h2>Qué sale del dispositivo</h2>
<ul>
<li><strong>Compras.</strong> Si te suscribes a Veintiuno Pro, la compra la procesa Apple. Nosotros no vemos ni recibimos tu método de pago. Para saber si tu suscripción está activa usamos <a href="https://www.revenuecat.com/privacy/" rel="noopener">RevenueCat</a>, que recibe un identificador anónimo generado por la app y el estado de la suscripción. Ese identificador no está vinculado a tu nombre ni a tu Apple ID.</li>
<li><strong>Diagnósticos de Apple.</strong> Si tienes activado el envío de datos de análisis en los ajustes de tu iPhone, Apple puede compartirnos informes de fallos agregados. No contienen datos que te identifiquen.</li>
</ul>

<h2>Lo que no hacemos</h2>
<p>No hacemos seguimiento publicitario, no usamos el identificador de publicidad (IDFA), no vendemos ni cedemos datos a terceros con fines comerciales, y no hay redes de anuncios dentro de la app.</p>

<h2>Notificaciones</h2>
<p>El recordatorio diario es opcional y se programa en tu propio dispositivo. No enviamos notificaciones desde un servidor.</p>

<h2>Menores</h2>
<p>Veintiuno está clasificada para mayores de 18 años y no está dirigida a menores. No recogemos datos de menores de forma consciente.</p>

<h2>Tus derechos</h2>
<p>Como no guardamos datos personales identificables, no hay un perfil que consultar o borrar. Para ejercer cualquier derecho del RGPD o preguntar cualquier cosa, escribe a <a href="mailto:{MAIL}">{MAIL}</a> y respondemos.</p>

<h2>Cambios</h2>
<p>Si esta política cambia, se actualiza esta página y la fecha de arriba.</p>
""", FOOT_ES)

# ---------------------------------------------------------------- terminos
FILES["terminos/index.html"] = page("es", 1, "Términos de uso · Veintiuno",
  "Términos de uso y condiciones de suscripción de la app Veintiuno.", NAV_ES, f"""
<h1>Términos de uso</h1>
<p class="updated">Última actualización: {UPDATED_ES}</p>

<h2>1. Qué es Veintiuno</h2>
<p>Veintiuno es una aplicación educativa para aprender la estrategia básica del blackjack. No se juega con dinero real, no hay apuestas ni fichas con valor, y no hay ninguna relación con casinos ni con operadores de juego. Nada de lo que ganes o pierdas dentro de la app tiene valor monetario.</p>

<h2>2. Uso responsable y legal</h2>
<p>El contenido es formativo. No garantizamos ningún resultado económico y la app no debe entenderse como un método para ganar dinero. Usar dispositivos electrónicos como ayuda en una mesa de juego real está prohibido por los casinos y es ilegal en muchas jurisdicciones; usar Veintiuno para eso queda fuera de su finalidad y bajo tu exclusiva responsabilidad.</p>

<h2>3. Veintiuno Pro: suscripción</h2>
<p>Los tres primeros días de la ruta de aprendizaje son gratuitos. El resto del contenido y las herramientas avanzadas requieren una suscripción:</p>
<ul>
<li><strong>Semanal</strong> — 4,99 € por semana.</li>
<li><strong>Anual</strong> — 49,99 € por año.</li>
</ul>
<p>Los precios en otros países son el equivalente fijado por Apple para cada territorio y se muestran siempre en tu moneda antes de confirmar la compra.</p>

<h2>4. Pago, renovación y cancelación</h2>
<ul>
<li>El pago se carga en tu cuenta de Apple al confirmar la compra.</li>
<li>La suscripción <strong>se renueva automáticamente</strong> salvo que la canceles al menos 24 horas antes del final del periodo en curso.</li>
<li>La renovación se cobra en las 24 horas previas al final del periodo, al precio vigente.</li>
<li>Puedes gestionar o cancelar la suscripción en cualquier momento en <em>Ajustes → tu nombre → Suscripciones</em> en tu iPhone, o desde Ajustes dentro de la app.</li>
<li>Cancelar detiene las renovaciones futuras; mantienes el acceso hasta el final del periodo ya pagado. No se devuelve la parte no consumida de un periodo en curso.</li>
</ul>
<p>Las devoluciones las gestiona Apple según sus propias condiciones, en <a href="https://reportaproblem.apple.com" rel="noopener">reportaproblem.apple.com</a>. Nosotros no podemos emitir reembolsos directamente.</p>

<h2>5. Restaurar compras</h2>
<p>Si reinstalas la app o cambias de dispositivo, usa <em>Ajustes → Restaurar compras</em> dentro de Veintiuno. No se te cobra dos veces.</p>

<h2>6. Propiedad intelectual</h2>
<p>La app, sus textos, tablas, sonidos y diseño son propiedad de su autor. Puedes usarlos para aprender; no puedes redistribuirlos ni revenderlos.</p>

<h2>7. Responsabilidad</h2>
<p>La app se ofrece «tal cual». Ponemos cuidado en que las tablas y los cálculos sean correctos, pero no asumimos responsabilidad por decisiones que tomes fuera de la app ni por pérdidas económicas de ningún tipo.</p>

<h2>8. Juego responsable</h2>
<p class="warn">Si el juego ha dejado de ser diversión, pide ayuda. En España: <strong>900 200 225</strong>, línea gratuita y confidencial.</p>

<h2>9. Contacto</h2>
<p><a href="mailto:{MAIL}">{MAIL}</a></p>
""", FOOT_ES)

# ---------------------------------------------------------------- soporte
FILES["soporte/index.html"] = page("es", 1, "Soporte · Veintiuno",
  "Ayuda y contacto para la app Veintiuno.", NAV_ES, f"""
<h1>Soporte</h1>
<p class="lead">Escribe a <a href="mailto:{MAIL}">{MAIL}</a> y te contestamos. Dinos la versión de la app y el modelo de iPhone si es un fallo.</p>

<h2>Preguntas frecuentes</h2>

<div class="card">
<h2 style="margin-top:0">He pagado y sigo viendo el candado</h2>
<p>Abre <em>Ajustes → Restaurar compras</em> dentro de la app. Si sigue igual, comprueba que estás con el mismo Apple ID con el que compraste.</p>
</div>

<div class="card">
<h2 style="margin-top:0">¿Cómo cancelo la suscripción?</h2>
<p>En tu iPhone: <em>Ajustes → tu nombre → Suscripciones → Veintiuno → Cancelar</em>. Mantienes el acceso hasta el final del periodo pagado.</p>
</div>

<div class="card">
<h2 style="margin-top:0">¿Cómo cambio el idioma?</h2>
<p>Dentro de la app: <em>Ajustes → Idioma</em>. Por defecto Veintiuno usa el idioma de tu iPhone.</p>
</div>

<div class="card">
<h2 style="margin-top:0">La estrategia que me corrige no coincide con la tabla que yo tengo</h2>
<p>La jugada correcta depende de las reglas de la mesa: número de barajas, si el crupier pide con 17 blando, si se puede doblar tras dividir, si hay rendición y si hay carta oculta. Comprueba en <em>Ajustes → Reglas</em> qué mesa tienes seleccionada.</p>
</div>

<div class="card">
<h2 style="margin-top:0">¿Puedo usarla en un casino?</h2>
<p>No. Usar dispositivos electrónicos en una mesa de juego está prohibido y en muchos sitios es ilegal. Veintiuno es para estudiar en casa.</p>
</div>

<h2>Juego responsable</h2>
<p class="warn">Si el juego ha dejado de ser diversión, pide ayuda. En España: <strong>900 200 225</strong>, línea gratuita y confidencial.</p>
""", FOOT_ES)

# ---------------------------------------------------------------- index (en)
FILES["en/index.html"] = page("en", 1, "Veintiuno · Learn blackjack basic strategy",
  "Veintiuno is an iPhone app for learning and drilling blackjack basic strategy. No real money, no betting.",
  NAV_EN, f"""
<h1>Learn to play blackjack properly</h1>
<p class="lead">Veintiuno is an iPhone app that teaches basic strategy hand by hand, with a 14-day path, exams and a consultant that solves any hand.</p>

<div class="card">
<h2 style="margin-top:0">What it is, and what it isn't</h2>
<p>It is an educational tool. <strong>No real money is involved</strong>, there are no chips and no wagers, and it has no connection to any casino or betting operator.</p>
<p>Using an electronic device at a live blackjack table is forbidden by casinos and illegal in many jurisdictions. Veintiuno is built for studying at home, not for taking to a table.</p>
</div>

<h2>What's inside</h2>
<ul>
<li>A practice table that corrects you on every decision.</li>
<li>A 14-day path: one concept, one drill and one exam per day.</li>
<li>Strategy charts for different rule sets (S17/H17, DAS, surrender, with and without a hole card).</li>
<li>Hi-Lo counting explained honestly: what it is, what it is really worth, and where it doesn't work.</li>
<li>A hand consultant with the expected value of every option.</li>
<li>Ten languages, careful sound and haptics.</li>
</ul>

<h2>Veintiuno Pro</h2>
<p>The first three days of the path are free. Veintiuno Pro unlocks the remaining eleven lessons, the hand consultant and the mistake heat map. Pricing and renewal details are in the <a href="terms/">terms</a>.</p>

<h2>Responsible play</h2>
<p class="warn">If gambling has stopped being fun, ask for help. In Spain: <strong>900 200 225</strong> (free, confidential helpline). Elsewhere, look for your country's public service.</p>

<ul class="links">
<li><a href="privacy/">Privacy policy</a></li>
<li><a href="terms/">Terms of use</a></li>
<li><a href="support/">Support</a></li>
</ul>
""", FOOT_EN)

# ---------------------------------------------------------------- en/privacy
FILES["en/privacy/index.html"] = page("en", 2, "Privacy · Veintiuno",
  "Privacy policy for the Veintiuno app.", NAV_EN, f"""
<h1>Privacy policy</h1>
<p class="updated">Last updated: {UPDATED_EN}</p>

<p>Veintiuno is built to work without knowing who you are. There is no account, no sign-up, and we never ask for your name or email.</p>

<h2>What stays on your iPhone</h2>
<p>Your progress — decisions, accuracy, streaks, completed lessons and settings — is stored <strong>on your device only</strong>. It is never uploaded to a server of ours. Delete the app and that history goes with it.</p>

<h2>What leaves the device</h2>
<ul>
<li><strong>Purchases.</strong> If you subscribe to Veintiuno Pro, Apple processes the payment. We never see or receive your payment method. To know whether your subscription is active we use <a href="https://www.revenuecat.com/privacy/" rel="noopener">RevenueCat</a>, which receives an anonymous identifier generated by the app and the subscription status. That identifier is not linked to your name or your Apple ID.</li>
<li><strong>Apple diagnostics.</strong> If you have analytics sharing enabled in your iPhone settings, Apple may share aggregated crash reports with us. They contain nothing that identifies you.</li>
</ul>

<h2>What we don't do</h2>
<p>No advertising tracking, no use of the advertising identifier (IDFA), no selling or sharing data with third parties for commercial purposes, and no ad networks inside the app.</p>

<h2>Notifications</h2>
<p>The daily reminder is optional and scheduled on your own device. We send no notifications from a server.</p>

<h2>Minors</h2>
<p>Veintiuno is rated 18+ and is not directed at children. We do not knowingly collect data from minors.</p>

<h2>Your rights</h2>
<p>Because we hold no identifiable personal data, there is no profile to access or erase. To exercise any GDPR right, or to ask anything at all, write to <a href="mailto:{MAIL}">{MAIL}</a> and we will answer.</p>

<h2>Changes</h2>
<p>If this policy changes, this page and the date above are updated.</p>
""", FOOT_EN)

# ---------------------------------------------------------------- en/terms
FILES["en/terms/index.html"] = page("en", 2, "Terms of use · Veintiuno",
  "Terms of use and subscription conditions for the Veintiuno app.", NAV_EN, f"""
<h1>Terms of use</h1>
<p class="updated">Last updated: {UPDATED_EN}</p>

<h2>1. What Veintiuno is</h2>
<p>Veintiuno is an educational app for learning blackjack basic strategy. There is no real-money play, no wagering, no chips with any value, and no relationship with casinos or gambling operators. Nothing you win or lose inside the app has monetary value.</p>

<h2>2. Responsible and lawful use</h2>
<p>The content is educational. We guarantee no financial outcome, and the app must not be understood as a method for making money. Using an electronic device as an aid at a live gaming table is forbidden by casinos and illegal in many jurisdictions; using Veintiuno for that falls outside its purpose and is entirely your own responsibility.</p>

<h2>3. Veintiuno Pro: subscription</h2>
<p>The first three days of the learning path are free. The rest of the content and the advanced tools require a subscription:</p>
<ul>
<li><strong>Weekly</strong> — €4.99 per week.</li>
<li><strong>Yearly</strong> — €49.99 per year.</li>
</ul>
<p>Prices in other countries are the equivalent set by Apple for each territory, and are always shown in your currency before you confirm.</p>

<h2>4. Payment, renewal and cancellation</h2>
<ul>
<li>Payment is charged to your Apple account on confirmation of purchase.</li>
<li>The subscription <strong>renews automatically</strong> unless you cancel at least 24 hours before the end of the current period.</li>
<li>Renewal is charged within the 24 hours before the period ends, at the then-current price.</li>
<li>You can manage or cancel at any time in <em>Settings → your name → Subscriptions</em> on your iPhone, or from Settings inside the app.</li>
<li>Cancelling stops future renewals; you keep access until the end of the period already paid for. The unused portion of a current period is not refunded.</li>
</ul>
<p>Refunds are handled by Apple under its own terms, at <a href="https://reportaproblem.apple.com" rel="noopener">reportaproblem.apple.com</a>. We cannot issue refunds directly.</p>

<h2>5. Restoring purchases</h2>
<p>If you reinstall the app or change device, use <em>Settings → Restore purchases</em> inside Veintiuno. You will not be charged twice.</p>

<h2>6. Intellectual property</h2>
<p>The app, its text, charts, sounds and design belong to its author. You may use them to learn; you may not redistribute or resell them.</p>

<h2>7. Liability</h2>
<p>The app is provided "as is". We take care that the charts and calculations are correct, but we accept no liability for decisions you make outside the app or for financial losses of any kind.</p>

<h2>8. Responsible play</h2>
<p class="warn">If gambling has stopped being fun, ask for help. In Spain: <strong>900 200 225</strong>, free and confidential.</p>

<h2>9. Contact</h2>
<p><a href="mailto:{MAIL}">{MAIL}</a></p>
""", FOOT_EN)

# ---------------------------------------------------------------- en/support
FILES["en/support/index.html"] = page("en", 2, "Support · Veintiuno",
  "Help and contact for the Veintiuno app.", NAV_EN, f"""
<h1>Support</h1>
<p class="lead">Write to <a href="mailto:{MAIL}">{MAIL}</a> and we'll get back to you. For a bug, tell us the app version and your iPhone model.</p>

<h2>Frequent questions</h2>

<div class="card">
<h2 style="margin-top:0">I paid but I still see the lock</h2>
<p>Open <em>Settings → Restore purchases</em> inside the app. If it persists, check that you are signed in with the same Apple ID you bought with.</p>
</div>

<div class="card">
<h2 style="margin-top:0">How do I cancel the subscription?</h2>
<p>On your iPhone: <em>Settings → your name → Subscriptions → Veintiuno → Cancel</em>. You keep access until the end of the paid period.</p>
</div>

<div class="card">
<h2 style="margin-top:0">How do I change the language?</h2>
<p>Inside the app: <em>Settings → Language</em>. By default Veintiuno follows your iPhone's language.</p>
</div>

<div class="card">
<h2 style="margin-top:0">The correction doesn't match the chart I have</h2>
<p>The right play depends on the table rules: number of decks, whether the dealer hits soft 17, whether doubling after split is allowed, whether surrender exists, and whether there is a hole card. Check which table is selected in <em>Settings → Rules</em>.</p>
</div>

<div class="card">
<h2 style="margin-top:0">Can I use it in a casino?</h2>
<p>No. Using electronic devices at a gaming table is forbidden and in many places illegal. Veintiuno is for studying at home.</p>
</div>

<h2>Responsible play</h2>
<p class="warn">If gambling has stopped being fun, ask for help. In Spain: <strong>900 200 225</strong>, free and confidential.</p>
""", FOOT_EN)

for path, html in FILES.items():
    os.makedirs(os.path.dirname(path) or ".", exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        f.write(html)
    print("wrote", path)
