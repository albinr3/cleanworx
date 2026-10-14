# Medición GA4 de CleanWorx

## Estado al 14 de octubre de 2026

- Exportación estática compilada y verificada; paquete listo en `cleanworx-hostinger-ga4-2026-10-14.zip`. No se ha publicado desde este entorno, por lo que las pruebas de producción siguen pendientes.
- Propiedad GA4 `CleanWorxNJ` (`558911953`), flujo web `16123931966`, ID `G-FRVB9W1H8D`.
- El sitio Next.js carga el tag una vez. En los dominios de producción envía `page_view` explícitamente en la carga inicial y en cambios de ruta; la configuración del tag usa `send_page_view: false`. En el flujo GA4 se desactivaron las vistas de página automáticas por cambios del historial para evitar duplicados. Las futuras pruebas en `localhost` no enviarán eventos propios ni configurarán la propiedad. Las primeras pruebas locales sí generaron eventos en GA4; identificarlos por host antes de usar datos históricos.
- `generate_lead` está configurado como evento clave principal, sin valor monetario predeterminado. Retención de eventos: 14 meses. Están registradas las dimensiones de evento `service_interest` (Servicio de interés) y `destination_host` (Host de reserva).
- Search Console para `cleanworxnj.com` está vinculado al flujo. La propiedad no tiene vinculación con Google Ads. No hay campañas, costes ni etiquetado automático verificables desde esta cuenta.
- El sitio público `cleanworx-llc.square.site` ya carga `G-FRVB9W1H8D` una vez; el propietario indicó que configuró Square. No añadir un segundo tag. La etiqueta de Google incluye `www.cleanworxnj.com`, `cleanworxnj.com` y `cleanworx-llc.square.site` como dominios de medición cruzada. La continuidad de sesión con `_gl` sigue pendiente de prueba desde el sitio publicado; `localhost` no pertenece a esa lista.
- La página pública de servicio en `book.squareup.com` se inspeccionó por separado: no carga `G-FRVB9W1H8D` ni expone `gtag`. No se ha probado una confirmación real. No existe `booking_completed` ni una cifra de reservas atribuida a SEO/Ads.
- La [exploración GA4 CleanWorx](https://analytics.google.com/analytics/web/#/analysis/a140603524p558911953/edit/3HiB7psCSfCwi4er0fDtQQ) está compartida en modo de solo lectura con los usuarios de la propiedad. Tiene tres pestañas: sesiones y total de eventos clave por fuente/medio de sesión, página de entrada y host; conteo de `generate_lead`, `click_call`, `click_email` y `booking_click` por fuente/medio, evento y host; y conteo exclusivo de `generate_lead` por fuente/medio, página de entrada y host. No hay volumen histórico suficiente para validar resultados orgánicos o de Ads todavía.
- Audiencias publicadas: **Sesión Google orgánico** (90 días, `google / organic`), **Páginas de alta intención** (90 días, páginas de contacto, precios y servicios), **Leads confirmados** (180 días, `generate_lead`) y **Clics de reserva o llamada** (90 días, `booking_click` o `click_call`). Son grupos de usuarios; ninguno representa citas completadas.

## Auditoría de configuración del 14 de octubre de 2026

- El MCP `analytics-mcp` confirmó la propiedad `CleanWorxNJ` (`558911953`), categoría Automotive, zona horaria `America/New_York`, moneda USD, las dimensiones de evento `customEvent:service_interest` y `customEvent:destination_host`, y cero vínculos con Google Ads.
- La API de administración confirmó el flujo web `16123931966` con `G-FRVB9W1H8D`, retención de eventos y usuarios de 14 meses, y `generate_lead` como evento clave con conteo una vez por evento. `purchase` figura como evento clave predeterminado de GA4, pero no se registró ningún `purchase`; no debe interpretarse como cita confirmada.
- La API confirmó las cuatro audiencias de CleanWorx con las condiciones y duraciones descritas arriba. La medición mejorada está activa; la interfaz confirma que la opción de vistas automáticas por cambios del historial está desactivada. Search Console `cleanworxnj.com` sigue vinculada al flujo. La exploración compartida ahora tiene una tercera pestaña filtrada exclusivamente a `generate_lead` para evitar confundir el total de eventos clave con contactos.
- La configuración de etiqueta conserva las coincidencias exactas para `cleanworxnj.com`, `www.cleanworxnj.com` y `cleanworx-llc.square.site`. Esto solo prepara la medición multidominio; no demuestra que `_gl` sobreviva al recorrido real.
- El reporte MCP de los últimos siete días solo mostró `localhost` y `cleanworx-llc.square.site`: dos `booking_click` de pruebas locales, cero eventos clave y ninguna sesión identificada como `google / organic` o `google / cpc`. El propietario confirmó que aún no ha publicado el nuevo sitio etiquetado, por lo que la ausencia del dominio principal es esperada. La exploración contiene filas de pruebas de esas fechas; la pestaña exclusiva de `generate_lead` aún no tiene datos.
- Square Online incluye una sola carga de `gtag/js?id=G-FRVB9W1H8D`, condicionada a consentimiento de estadísticas/marketing. El reporte MCP sí contiene vistas de página de Square Online; una visita sin consentimiento puede no medirse. La página pública de `book.squareup.com` sigue sin ese ID y no se ha observado `booking_completed`.
- En el pie de página de Square Online, los enlaces visibles de teléfono y correo apuntan a valores de ejemplo (`tel:(555) 555-5555` y `mailto:hi@mystore.com`). El propietario debe corregirlos en Square; no afectan los enlaces del sitio Next.js.

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

`generate_lead` es el único evento propio marcado como **evento clave principal**. `click_call` y `click_email` registran la intención de contactar, sin confirmar una llamada o un correo enviado. `booking_click` registra intención de reservar. `booking_completed` **no está implementado**. La medición mejorada de GA4 puede producir eventos automáticos adicionales, como `click`; para contar los clics de reserva definidos aquí, filtrar siempre por `booking_click`.

El formulario solo envía a GA4 una categoría de servicio elegida de una lista fija. No se envían nombre, correo, teléfono, vehículo, mensaje ni URL de destino como parámetros de los eventos propios. El tag de Google sí recoge la URL de la página, por lo que no deben incluirse datos personales en URLs.

## Lectura de los informes

Comparar **Grupo de canales predeterminado de la sesión** y **Fuente/medio de la sesión**. `google / organic` representa tráfico orgánico atribuido por GA4; `google / cpc` representa tráfico pago identificado. Mantener Direct, Referral y Unassigned separados. La página de entrada y el host ayudan a distinguir visitas al sitio principal de llegadas directas a Square. Usar Search Console para consultas y páginas orgánicas. Estas métricas describen atribución de tráfico, no prueban que una acción SEO concreta causó una visita o reserva.

La primera pestaña de la exploración muestra sesiones y el total de eventos clave, que puede incluir `purchase` si ese evento predeterminado se registra en el futuro. La segunda usa `Número de eventos` y filtra los cuatro eventos propios, desglosados por fuente/medio de sesión y host. La tercera filtra `Nombre del evento = generate_lead` y muestra su número de eventos por fuente/medio de sesión, página de entrada y host; úsala para contar leads. No sumar `booking_click` a citas confirmadas. Si una sesión cruza dos hosts, los desgloses de sesiones por host pueden solaparse; no sumar columnas de host como si fueran sesiones únicas.

Sin acceso a Google Ads no se pueden comprobar campañas, costes, URL finales ni etiquetado automático. Si una visita pagada pierde `gclid`, `gbraid`, `wbraid` y UTM, puede aparecer como orgánica o desconocida. No reasignar fuentes por suposición.

Para evaluar el trabajo SEO, filtrar por **Fuente/medio de la sesión = `google / organic`**, revisar las páginas de entrada y contrastarlas con consultas y páginas de Search Console. Para Ads, usar `google / cpc` solo cuando GA4 lo identifique; revisar por separado otras fuentes pagadas y los casos desconocidos. Aplicar esos filtros a sesiones, `generate_lead`, `click_call` y `booking_click`; no llamar “reservas” a estos últimos. El host indica dónde se midió el evento, y la página de entrada indica dónde comenzó la sesión medida. GA4 puede atribuir fuentes según sus propias reglas; estos informes no demuestran causalidad del trabajo SEO ni la reserva final en Square.

## Pruebas pendientes tras publicar en Hostinger

1. Confirmar que la nueva exportación está publicada en `cleanworxnj.com` y `www.cleanworxnj.com`, con un solo tag `G-FRVB9W1H8D` por página. Abrir el sitio publicado y comprobar en Realtime y DebugView un `page_view` por carga y por cambio de ruta. Revisar las solicitudes `g/collect` para ausencia de duplicados y el host registrado.
2. Enviar un contacto de prueba válido y uno fallido. Confirmar `generate_lead` únicamente en el exitoso, sin datos personales en parámetros. Las pruebas locales no enviaron un contacto real a Formspree.
3. Probar teléfono, correo y los dos destinos Square. Confirmar un solo evento propio por clic y el `destination_host` correcto.
4. Desde `www.cleanworxnj.com`, abrir Square Online y comprobar que la URL recibe `_gl`, que Square lo conserva y que GA4 mantiene la misma sesión. Probar con el consentimiento de estadísticas aceptado en Square y documentar qué deja de medirse si se rechaza. La página pública comprobada en `book.squareup.com` no carga el tag; no asumir continuidad ni atribución de reservas en Appointments.
5. Probar con solicitudes HTTP de solo lectura que las páginas de entrada y redirecciones de ambas variantes de Hostinger conservan `gclid`, `gbraid`, `wbraid` y UTM. Revisar al menos una URL final o visita real de Google Ads, facilitada por quien administra los anuncios, para comprobar si lleva identificadores o UTM y si llega al sitio principal o directamente a Square. Después revisar tráfico real `google / cpc`, `google / organic`, referencias propias inesperadas y Direct/Unassigned. Las pruebas con identificadores ficticios solo validan redirecciones, no atribución real.
6. Si el propietario puede hacer una reserva controlada sin cargo ni afectar disponibilidad, comprobar una confirmación real y única. Solo entonces crear `booking_completed` como evento clave y evitar que la recarga duplique la reserva. Si Square Appointments no expone esa señal, contar citas totales en Square por separado y acordar una integración antes de atribuir reservas a SEO o Ads.
7. Tras acumular datos de producción, contrastar en la exploración GA4 las fuentes, páginas de entrada y hosts con las páginas y consultas orgánicas de Search Console. Registrar los casos sin fuente reconocible por separado; una visita sin identificadores de Ads no confirma su origen SEO.
8. Corregir en Square Online los enlaces de teléfono y correo del pie de página que todavía apuntan a datos de ejemplo y volver a probarlos.

No crear audiencias de reservas completadas hasta verificar la confirmación real y única descrita en el punto 6. La audiencia de leads usa `generate_lead`; la de intención usa `booking_click` o `click_call` con su nombre explícito.
