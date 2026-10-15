# Plan de integración: citas confirmadas de Square en GA4

**Estado:** integración activada en producción y comprobada con el evento de prueba de Square y una cita real.
**Fecha de actualización:** 15 de octubre de 2026.
**Sitio:** `cleanworxnj.com`; reservas alojadas por Square Appointments.

## Objetivo y decisiones

Registrar `booking_completed` en la propiedad GA4 de CleanWorx cuando una cita de Square alcance el estado `ACCEPTED`. El alcance incluye reservas hechas por clientes en Square y citas creadas por el equipo. Cada ID de reserva debe contabilizarse una sola vez en el registro de la integración.

Se mantiene el formulario de reservas de Square. La web ya se ejecuta como aplicación Next.js con servidor Node.js en Hostinger para recibir los avisos. Una exportación estática de Next.js no puede atender el `POST` dinámico de un webhook. La medición actual está descrita en [GA4-CLEANWORX.md](./GA4-CLEANWORX.md).

**`booking_click` significa intención inicial en CleanWorx; `book_appointment` significa que Square Online inició el flujo de citas; `booking_completed` significa cita aceptada en Square.** Ningún clic, solicitud pendiente ni evento `purchase` se contará como cita confirmada.

## Flujo previsto

```text
Cliente o equipo confirma una cita en Square
  → Square envía booking.created o booking.updated
  → Next.js verifica la firma y guarda el aviso
  → Se consulta o comprueba el estado de la reserva
  → Si está ACCEPTED y ese ID aún no se contabilizó:
       se prepara y envía booking_completed a GA4
  → Reintentos y conciliación comparan Square con el registro interno
```

1. Crear una aplicación de Square con acceso de lectura a nivel de vendedor para cubrir todas las citas visibles del negocio. Suscribir **`booking.created` y `booking.updated`**: una reserva puede empezar como `PENDING` y pasar a `ACCEPTED` después. Comprobar en producción los permisos, el plan de Square, las ubicaciones y la política de aceptación antes de activar la integración. [Square: webhooks de reservas](https://developer.squareup.com/docs/bookings-api/use-webhooks), [permisos de la API](https://developer.squareup.com/docs/bookings-api/what-it-is).
2. Crear un endpoint HTTPS `POST` en Next.js. Verificar `x-square-hmacsha256-signature` con la URL pública exacta, la clave de firma y el cuerpo **sin modificar**. Rechazar firmas inválidas; para avisos válidos, guardar el evento antes de responder `2xx` dentro del plazo de Square. Guardar las credenciales como variables de entorno de Hostinger, nunca en el repositorio. [Square: validar avisos](https://developer.squareup.com/docs/webhooks/step3validate), [Hostinger: variables de entorno](https://www.hostinger.com/support/how-to-add-environment-variables-during-node-js-application-deployment/).
3. Usar MySQL para registrar el ID del evento de Square, el ID de la reserva, su último estado conocido y el estado del envío a GA4. La unicidad por ID de reserva impedirá que reintentos, avisos duplicados o actualizaciones posteriores generen otra cita confirmada. Los avisos pueden llegar fuera de orden; el estado vigente de Square prevalecerá sobre el orden de recepción. [Square: entrega y reintentos](https://developer.squareup.com/docs/webhooks/overview).
4. Enviar `booking_completed` al flujo web `G-FRVB9W1H8D` mediante [GA4 Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4/sending-events). La clave de API permanecerá en el servidor. El evento no incluirá nombre, correo, teléfono, notas ni otros datos personales del cliente. Definir y probar un `client_id` técnico estable para las citas sin identificador web recuperable; estas citas se marcarán como **fuente de marketing desconocida**, sin inventar una campaña o sesión.
5. Programar reintentos de los envíos pendientes y una conciliación diaria con Square. La [Events API](https://developer.squareup.com/docs/events-api/overview) permite buscar eventos de los últimos 28 días y puede recuperar avisos perdidos; se comprobará que esté habilitada para la app. Registrar las diferencias entre citas `ACCEPTED` en Square, citas únicas guardadas y eventos enviados a GA4, con una alerta para revisión humana.

## Atribución y límites de la medición

`book_appointment` lo genera Square Online en `cleanworx-llc.square.site`. Es el evento clave para atribución de marketing porque conserva la sesión de GA4 hasta ese dominio cuando existe consentimiento. La etiqueta de GA4 añade `_gl` en el clic multidominio para transportar identificadores de sesión; esto también ocurre si la sesión comenzó como Direct y no indica una búsqueda de Google. Se cuenta una vez por sesión para evitar inflar varias selecciones de servicio.

`booking_completed` sigue siendo el resultado real y único. Se envía desde el servidor con un cliente técnico estable, por lo que no recibe campaña, fuente ni sesión del visitante. Se cuenta una vez por evento y no se debe emparejar de forma determinista con un `book_appointment`.

El webhook de Square identifica la reserva, pero no entrega el `client_id` ni el `session_id` de la visita que llevó al formulario alojado en `book.squareup.com`. Por ello, mantener ese formulario **no permite atribuir cada cita individualmente a SEO, Ads u otra campaña de forma verificable**. Se podrá distinguir el origen operativo que exponga Square, como reserva online o creada por el equipo, pero eso no equivale a la fuente de tráfico de GA4. Google exige identificadores de sesión y límites de tiempo específicos para [atribución de sesión mediante Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4/use-cases).

El objetivo operativo es detectar y corregir faltantes frente a Square, no afirmar que GA4 recibirá exactamente el 100 % de las citas en toda circunstancia. Square reintenta webhooks durante un tiempo limitado, y aceptar una solicitud del Measurement Protocol no sustituye la comprobación de los datos procesados en GA4. Square y el registro interno serán la referencia para el total de citas; GA4 será el informe de medición. [Square: política de entrega](https://developer.squareup.com/docs/webhooks/overview), [Google: validación de eventos](https://developers.google.com/analytics/devguides/collection/protocol/ga4/validating-events).

En GA4, `book_appointment` está marcado como evento clave con recuento **una vez por sesión**. `booking_completed` está marcado como evento clave con recuento **una vez por evento**. No se crea una audiencia ni una conversión de Ads que afirme atribuir una cita completa a una sesión sin unión verificable. `generate_lead` y `booking_click` conservan sus significados actuales.

## Pruebas y publicación

- **Seguridad y duplicados:** firma válida e inválida; mismo `event_id` repetido; varios eventos para un mismo ID de reserva; avisos fuera de orden.
- **Estados:** `PENDING` sin evento GA4; transición a `ACCEPTED` con un solo `booking_completed`; cambios y cancelaciones posteriores sin repetir la confirmación.
- **Fallos:** interrupción de MySQL o GA4, reintentos, recuperación mediante conciliación y alerta por diferencias persistentes.
- **Casos reales:** una reserva controlada desde Square Online y otra creada por el equipo, cotejadas por ID con Square, el registro interno y GA4. Validar el payload con el servidor de pruebas de Measurement Protocol antes de enviarlo a producción.
- **Migración web:** probar Next.js en una URL de vista previa de Hostinger; verificar las páginas principales, redirecciones, conservación de UTM, sitemap, formularios y eventos GA4 existentes antes y después de conectar el dominio. Vigilar diariamente las discrepancias durante la primera semana.

## Requisitos operativos

- Acceso a Square Appointments y Square Developer, con permisos de lectura de vendedor y una suscripción de webhooks de producción.
- Confirmación en hPanel de Node.js, MySQL, variables de entorno y una tarea programada en el plan actual de Hostinger.
- Clave de firma de Square, token de lectura de Square, secreto de Measurement Protocol para el flujo `G-FRVB9W1H8D` y credenciales de MySQL, todos fuera del repositorio.
- Una reserva de prueba autorizada y un procedimiento para cotejar diariamente Square, el registro interno y GA4.

**Criterio de operación:** cada cita `ACCEPTED` aparece una vez en el registro interno, se envía a GA4 y se verifica en sus informes; las diferencias posteriores quedan visibles para conciliación. Las citas sin unión comprobable con una visita no se presentan como conversiones atribuibles a una campaña concreta.

## Implementación añadida

- Ruta firmada de Square: `POST /api/square/webhooks/bookings`.
- Tablas y deduplicación por `event_id` y por ID de reserva: [`database/square-booking-ga4.sql`](../../database/square-booking-ga4.sql).
- Evento `booking_completed` enviado con Measurement Protocol desde el servidor, sin datos personales ni parámetros de atribución inventados.
- Conciliación protegida: `POST /api/internal/booking-reconciliation`; consulta Events API de Square de los últimos 28 días y procesa las entregas pendientes.
- Paquete de Hostinger actualizado para desplegar Next.js standalone con servidor Node en lugar de exportación estática.

La guía de operación, conciliación y rotación de credenciales está en [SQUARE-GA4-BOOKING-WEBHOOK-DEPLOYMENT.md](./SQUARE-GA4-BOOKING-WEBHOOK-DEPLOYMENT.md).
