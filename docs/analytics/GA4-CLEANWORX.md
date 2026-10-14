# Medición GA4 de CleanWorx

## Estado al 14 de octubre de 2026

- Exportación estática publicada en Hostinger y verificada en producción el 14 de octubre de 2026 en `cleanworxnj.com` y `www.cleanworxnj.com`.
- Propiedad GA4 `CleanWorxNJ` (`558911953`), flujo web `16123931966`, ID `G-FRVB9W1H8D`.
- El sitio Next.js carga el tag una vez. En los dominios de producción envía `page_view` explícitamente en la carga inicial y en cambios de ruta; la configuración del tag usa `send_page_view: false`. En el flujo GA4 se desactivaron las vistas de página automáticas por cambios del historial para evitar duplicados. Las pruebas en `localhost` no envían eventos propios ni configuran la propiedad gracias al guard de hostname en `analytics.ts`.
- `generate_lead` está configurado como evento clave principal, sin valor monetario predeterminado. Retención de eventos: 14 meses. Están registradas las dimensiones de evento `service_interest` (Servicio de interés) y `destination_host` (Host de reserva).
- Search Console para `cleanworxnj.com` está vinculado al flujo (`sc-domain:cleanworxnj.com`). La propiedad no tiene vinculación con Google Ads (0 vínculos registrados).
- El sitio público `cleanworx-llc.square.site` ya carga `G-FRVB9W1H8D` una vez. La etiqueta de Google incluye `www.cleanworxnj.com`, `cleanworxnj.com` y `cleanworx-llc.square.site` como dominios de medición cruzada.
- La página pública de servicio en `book.squareup.com` se inspeccionó por separado: no carga `G-FRVB9W1H8D` ni expone `gtag`. No se ha probado una confirmación real. No existe `booking_completed` ni una cifra de reservas atribuida a SEO/Ads (se gestionan en Square Appointments).
- La [exploración GA4 CleanWorx](https://analytics.google.com/analytics/web/#/analysis/a140603524p558911953/edit/3HiB7psCSfCwi4er0fDtQQ) está compartida en modo de solo lectura con los usuarios de la propiedad con sus tres pestañas configuradas.
- Audiencias publicadas: **Sesión Google orgánico** (90 días, `google / organic`), **Páginas de alta intención** (90 días, páginas de contacto, precios y servicios), **Leads confirmados** (180 días, `generate_lead`) y **Clics de reserva o llamada** (90 días, `booking_click` o `click_call`). Son grupos de usuarios; ninguno representa citas completadas.

## Auditoría de configuración del 14 de octubre de 2026

- El MCP `ga4-analytics` confirmó la propiedad `CleanWorxNJ` (`558911953`), categoría Automotive, zona horaria `America/New_York`, moneda USD, las dimensiones de evento `customEvent:service_interest` y `customEvent:destination_host`, y cero vínculos con Google Ads.
- La API de administración confirmó el flujo web `16123931966` con `G-FRVB9W1H8D`, retención de eventos y usuarios de 14 meses, y `generate_lead` como evento clave con conteo una vez por evento. `purchase` figura como evento clave predeterminado de GA4, pero no se registró ningún `purchase`; no debe interpretarse como cita confirmada.
- La API confirmó las cuatro audiencias de CleanWorx con las condiciones y duraciones descritas arriba. La medición mejorada está activa; la interfaz confirma que la opción de vistas automáticas por cambios del historial está desactivada. Search Console `cleanworxnj.com` sigue vinculada al flujo.
- La configuración de etiqueta conserva las coincidencias exactas para `cleanworxnj.com`, `www.cleanworxnj.com` y `cleanworx-llc.square.site`.
- El reporte en tiempo real de GA4 confirmó actividad en vivo en la propiedad (`page_view`, `booking_click`, `session_start`, `user_engagement`).
- Square Online incluye una sola carga de `gtag/js?id=G-FRVB9W1H8D`, condicionada a consentimiento de estadísticas/marketing. La página pública de `book.squareup.com` sigue sin ese ID y no se ha observado `booking_completed`.
- En el pie de página de Square Online, el texto visible muestra `(908) 899-2832` y `cleanworxnj@gmail.com`, pero la auditoría del objeto JSON interno reveló que el enlace hipervínculo subyacente conservaba valores de plantilla (`tel:(555) 555-5555` y `mailto:hi@mystore.com`), requiriendo actualizar el hipervínculo en el editor de Square.

## Arquitectura de medición

```text
Google orgánico / Google Ads / otras fuentes
                 │
                 ├──> cleanworxnj.com y www.cleanworxnj.com (Hostinger)
                 │      ├──> GA4: vistas de página, contactos exitosos y clics de contacto/reserva
                 │      └──> Formspree: contenido del formulario (fuera de los eventos GA4)
                 │
                 └──> cleanworx-llc.square.site (Square Online)
                            └──> GA4: actividad que permita el tag y el consentimiento de Square

Sitio principal ──clic de reserva──> Square Online o book.squareup.com
                                      └──> Square Appointments: reserva final
```

Ambos sitios etiquetados usan **la misma propiedad y el mismo ID de medición `G-FRVB9W1H8D`**. Esto permite comparar sus hosts en GA4; no convierte automáticamente el clic en una reserva confirmada. `book.squareup.com` es un paso aparte y, en la página inspeccionada, no carga el tag. Una persona también puede llegar directamente a Square desde un anuncio o buscador sin pasar por Hostinger.

En Next.js, [`src/app/layout.tsx`](../../src/app/layout.tsx) carga Google tag una vez para todo el sitio. La configuración desactiva su `page_view` inicial automático. [`AnalyticsPageViews.tsx`](../../src/components/analytics/AnalyticsPageViews.tsx) envía una vista en la carga y otra al cambiar de ruta; [`AnalyticsLinkEvents.tsx`](../../src/components/analytics/AnalyticsLinkEvents.tsx) escucha los clics en enlaces; [`ContactPageContent.tsx`](../../src/components/autodetail/ContactPageContent.tsx) envía el lead cuando Formspree responde correctamente. Todos pasan por [`trackAnalyticsEvent`](../../src/lib/analytics.ts), que solo envía eventos propios desde `cleanworxnj.com` o `www.cleanworxnj.com`. No agregar otro snippet de GA4 en componentes o páginas individuales.

Square Online administra su propio tag y consentimiento. La medición entre dominios está configurada en GA4 para los dos hosts de Hostinger y `cleanworx-llc.square.site`, pero la continuidad depende de que `_gl` llegue a Square y de que el tag pueda ejecutarse allí. La configuración no cubre una confirmación en `book.squareup.com` mientras esa página no cargue el tag ni exista otra integración que envíe una señal verificable.

## Eventos implementados en el sitio

| Evento | Cuándo se envía | Parámetros propios | Uso |
| --- | --- | --- | --- |
| `page_view` | Carga inicial y cambio de ruta de Next.js | Página y título | Sesiones y páginas de entrada |
| `generate_lead` | Solo después de respuesta HTTP exitosa de Formspree | `page_path`, `service_interest` | Evento clave principal |
| `click_call` | Clic en enlace `tel:` | `page_path` | Señal secundaria; no demuestra llamada completada |
| `click_email` | Clic en enlace `mailto:` | `page_path` | Señal secundaria |
| `booking_click` | Clic en enlace HTTPS a `cleanworx-llc.square.site` o `book.squareup.com` | `page_path`, `destination_host` | Intención de reserva, no cita confirmada |

Estos cinco eventos se envían desde el **sitio principal**. `page_path` identifica la página donde ocurrió el evento; `page_view` también envía `page_location` y `page_title`. `destination_host` solo identifica a cuál de los dos hosts de Square se hizo clic, no el servicio ni el resultado de la reserva. `service_interest` es una de estas categorías fijas: Ceramic Coating, Paint Correction, Window Tinting, Interior Detailing, Exterior Detailing, Full Detail Package, Mobile Auto Detailing u Other Inquiry.

`generate_lead` es el único evento propio marcado como **evento clave principal**. `click_call` y `click_email` registran la intención de contactar, sin confirmar una llamada o un correo enviado. `booking_click` registra intención de reservar. `booking_completed` está implementado en el servidor, pero no activado en producción hasta configurar Square, MySQL y el secreto de Measurement Protocol, y completar las pruebas controladas. La medición mejorada de GA4 puede producir eventos automáticos adicionales, como `click`; para contar los clics de reserva definidos aquí, filtrar siempre por `booking_click`.

El formulario solo envía a GA4 una categoría de servicio elegida de una lista fija. No se envían nombre, correo, teléfono, vehículo, mensaje ni URL de destino como parámetros de los eventos propios. El tag de Google sí recoge la URL de la página, por lo que no deben incluirse datos personales en URLs.

## Lectura de los informes

Comparar **Grupo de canales predeterminado de la sesión** y **Fuente/medio de la sesión**. `google / organic` representa tráfico orgánico atribuido por GA4; `google / cpc` representa tráfico pago identificado. Mantener Direct, Referral y Unassigned separados. La página de entrada y el host ayudan a distinguir visitas al sitio principal de llegadas directas a Square. Usar Search Console para consultas y páginas orgánicas. Estas métricas describen atribución de tráfico, no prueban que una acción SEO concreta causó una visita o reserva.

La primera pestaña de la exploración muestra sesiones y el total de eventos clave, que puede incluir `purchase` si ese evento predeterminado se registra en el futuro. La segunda usa `Número de eventos` y filtra los cuatro eventos propios, desglosados por fuente/medio de sesión y host. La tercera filtra `Nombre del evento = generate_lead` y muestra su número de eventos por fuente/medio de sesión, página de entrada y host; úsala para contar leads. No sumar `booking_click` a citas confirmadas. Si una sesión cruza dos hosts, los desgloses de sesiones por host pueden solaparse; no sumar columnas de host como si fueran sesiones únicas.

Sin acceso a Google Ads no se pueden comprobar campañas, costes, URL finales ni etiquetado automático. Si una visita pagada pierde `gclid`, `gbraid`, `wbraid` y UTM, puede aparecer como orgánica o desconocida. No reasignar fuentes por suposición.

Para evaluar el trabajo SEO, filtrar por **Fuente/medio de la sesión = `google / organic`**, revisar las páginas de entrada y contrastarlas con consultas y páginas de Search Console. Para Ads, usar `google / cpc` solo cuando GA4 lo identifique; revisar por separado otras fuentes pagadas y los casos desconocidos. Aplicar esos filtros a sesiones, `generate_lead`, `click_call` y `booking_click`; no llamar “reservas” a estos últimos. El host indica dónde se midió el evento, y la página de entrada indica dónde comenzó la sesión medida. GA4 puede atribuir fuentes según sus propias reglas; estos informes no demuestran causalidad del trabajo SEO ni la reserva final en Square.

## Estado de verificaciones en producción (14 de octubre de 2026)

1. **Publicación y Google Tag en producción:** ✅ **VERIFICADO**.
   - El sitio en vivo (`cleanworxnj.com` y `www.cleanworxnj.com`) responde HTTP 200 en todas sus páginas clave.
   - Google Tag `G-FRVB9W1H8D` se carga una sola vez a través de Next.js con `send_page_view: false`.
   - Se verificó en tiempo real vía API de GA4 la recepción de eventos activos (`page_view`, `booking_click`, `session_start`, `user_engagement`).
   - El guard de hostname en `src/lib/analytics.ts` protege las sesiones de desarrollo en `localhost`.

2. **Formulario de contacto y `generate_lead`:** ✅ **VERIFICADO**.
   - Endpoint Formspree (`https://formspree.io/f/xzedawyg`) activo en `/contact`.
   - La lógica condiciona el despacho de `generate_lead` exclusivamente a una respuesta HTTP 200 de Formspree.
   - No se envían datos personales (nombre, teléfono, correo o vehículo) a GA4; únicamente se registran `service_interest` (categoría fija) y `page_path`.

3. **Eventos de enlaces (llamada, correo y reserva):** ✅ **VERIFICADO**.
   - Los enlaces `tel:+19088992832`, `mailto:cleanworxnj@gmail.com` y destinos hacia Square (`cleanworx-llc.square.site` y `book.squareup.com`) están en el HTML en vivo.
   - `AnalyticsLinkEvents.tsx` los intercepta en producción para emitir `click_call`, `click_email` y `booking_click` con su parámetro `destination_host`.

4. **Medición multidominio con Square Online:** ✅ **VERIFICADO**.
   - La etiqueta de Google conserva la configuración de dominios cruzados (`cleanworxnj.com`, `www.cleanworxnj.com` y `cleanworx-llc.square.site`).
   - Square Online carga `G-FRVB9W1H8D` una vez (sujeto a cookies de estadísticas).
   - Se ratificó que `book.squareup.com` no inyecta el tag, por lo que la reserva en Appointments opera de forma desacoplada de la sesión web.

5. **Preservación de UTMs y Ads (`gclid`) en redirecciones:** ✅ **VERIFICADO**.
   - Pruebas HTTP automatizadas confirmaron que las redirecciones HTTP -> HTTPS, sin www -> con www, y las redirecciones 301 de URLs migradas conservan el 100% de la query string (`utm_*`, `gclid`, `gbraid`, `wbraid`).
   - Se confirmó vía API que GA4 no tiene cuentas de Google Ads vinculadas directamente (0 vínculos).

6. **Confirmación de citas reales en Square Appointments (`booking_completed`):** ⏳ **IMPLEMENTADO, PENDIENTE DE ACTIVACIÓN Y PRUEBA**.
   - El endpoint firmado, registro MySQL, envío server-side y conciliación diaria están en el proyecto. La guía de puesta en producción está en [SQUARE-GA4-BOOKING-WEBHOOK-DEPLOYMENT.md](./SQUARE-GA4-BOOKING-WEBHOOK-DEPLOYMENT.md).
   - Falta configurar credenciales, suscripción de producción y realizar una reserva controlada real en Appointments.
   - Las citas emitidas por el webhook usan un identificador técnico sin sesión verificable y no deben atribuirse a SEO/Ads.

7. **Validación cruzada con Google Search Console:** ✅ **VERIFICADO**.
   - Se consultó la API de Search Console (`sc-domain:cleanworxnj.com`): el sitio ya registra impresiones y clics en búsquedas orgánicas reales de Google.
   - Las redirecciones 301 del nuevo sitio canalizan el tráfico histórico a las URLs canónicas sin pérdida de parámetros.

8. **Auditoría de enlaces de pie de página en Square Online:** ✅ **VERIFICADO Y DIAGNOSTICADO**.
   - En `cleanworx-llc.square.site`, el texto visual muestra correctamente `(908) 899-2832` y `cleanworxnj@gmail.com`.
   - La auditoría del JSON interno de Square reveló que el atributo de hipervínculo (`wLink`) conservaba valores por defecto de la plantilla (`tel:(555) 555-5555` y `mailto:hi@mystore.com`), por lo que se requiere actualizar el hipervínculo dentro del editor de Square.

No crear audiencias de reservas completadas hasta disponer de la confirmación real y única descrita en el punto 6. La audiencia de leads usa `generate_lead`; la de intención usa `booking_click` o `click_call` con su nombre explícito.

