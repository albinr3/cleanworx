# Plan de integración: citas confirmadas de Square en GA4

**Estado:** plan aprobado; integración pendiente de implementar y verificar.  
**Fecha:** 14 de octubre de 2026.  
**Sitio:** `cleanworxnj.com`; reservas alojadas por Square Appointments.

## Objetivo y decisiones

Registrar `booking_completed` en la propiedad GA4 de CleanWorx cuando una cita de Square alcance el estado `ACCEPTED`. El alcance incluye reservas hechas por clientes en Square y citas creadas por el equipo. Cada ID de reserva debe contabilizarse una sola vez en el registro de la integración.

Se mantiene el formulario de reservas de Square. La web seguirá en Hostinger, pero pasará de la exportación estática actual a ejecutar este proyecto Next.js con servidor para recibir los avisos. El despliegue usará la capacidad Node.js del plan existente, previa comprobación en hPanel. La exportación estática de Next.js no puede atender el `POST` dinámico de un webhook; Hostinger [admite aplicaciones Next.js con servidor](https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/) en los planes compatibles. La medición actual está descrita en [GA4-CLEANWORX.md](./GA4-CLEANWORX.md).

**`booking_click` seguirá significando intención de reservar. `booking_completed` significará cita aceptada en Square.** Ningún clic, solicitud pendiente ni evento `purchase` se contará como cita confirmada.

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

El webhook de Square identifica la reserva, pero no entrega el `client_id` ni el `session_id` de la visita que llevó al formulario alojado en `book.squareup.com`. Por ello, mantener ese formulario **no permite atribuir cada cita individualmente a SEO, Ads u otra campaña de forma verificable**. Se podrá distinguir el origen operativo que exponga Square, como reserva online o creada por el equipo, pero eso no equivale a la fuente de tráfico de GA4. Google exige identificadores de sesión y límites de tiempo específicos para [atribución de sesión mediante Measurement Protocol](https://developers.google.com/analytics/devguides/collection/protocol/ga4/use-cases).

El objetivo operativo es detectar y corregir faltantes frente a Square, no afirmar que GA4 recibirá exactamente el 100 % de las citas en toda circunstancia. Square reintenta webhooks durante un tiempo limitado, y aceptar una solicitud del Measurement Protocol no sustituye la comprobación de los datos procesados en GA4. Square y el registro interno serán la referencia para el total de citas; GA4 será el informe de medición. [Square: política de entrega](https://developer.squareup.com/docs/webhooks/overview), [Google: validación de eventos](https://developers.google.com/analytics/devguides/collection/protocol/ga4/validating-events).

No marcar `booking_completed` como evento clave ni crear audiencias de reservas confirmadas hasta verificar reservas reales y el conteo en GA4. `generate_lead` y `booking_click` conservarán sus significados actuales.

## Pruebas y publicación

- **Seguridad y duplicados:** firma válida e inválida; mismo `event_id` repetido; varios eventos para un mismo ID de reserva; avisos fuera de orden.
- **Estados:** `PENDING` sin evento GA4; transición a `ACCEPTED` con un solo `booking_completed`; cambios y cancelaciones posteriores sin repetir la confirmación.
- **Fallos:** interrupción de MySQL o GA4, reintentos, recuperación mediante conciliación y alerta por diferencias persistentes.
- **Casos reales:** una reserva controlada desde Square Online y otra creada por el equipo, cotejadas por ID con Square, el registro interno y GA4. Validar el payload con el servidor de pruebas de Measurement Protocol antes de enviarlo a producción.
- **Migración web:** probar Next.js en una URL de vista previa de Hostinger; verificar las páginas principales, redirecciones, conservación de UTM, sitemap, formularios y eventos GA4 existentes antes y después de conectar el dominio. Vigilar diariamente las discrepancias durante la primera semana.

## Requisitos antes de activar producción

- Acceso a Square Appointments y Square Developer, con permisos de lectura de vendedor y una suscripción de webhooks de producción.
- Confirmación en hPanel de Node.js, MySQL, variables de entorno y una tarea programada en el plan actual de Hostinger.
- Clave de firma de Square, token de lectura de Square, secreto de Measurement Protocol para el flujo `G-FRVB9W1H8D` y credenciales de MySQL, todos fuera del repositorio.
- Una reserva de prueba autorizada y un procedimiento para cotejar diariamente Square, el registro interno y GA4.

**Criterio de aceptación:** cada cita `ACCEPTED` de los casos de prueba aparece una vez en el registro interno, se envía a GA4 y se verifica en sus informes; las diferencias posteriores quedan visibles para conciliación. Las citas sin unión comprobable con una visita no se presentan como conversiones atribuibles a una campaña concreta.
