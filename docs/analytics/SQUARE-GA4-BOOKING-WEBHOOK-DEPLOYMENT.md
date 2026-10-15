# Puesta en producción: Square Appointments → GA4

La integración está implementada, pero no se activa hasta completar esta lista en producción. Nunca copies secretos a archivos versionados ni a este documento.

## 1. Preparar MySQL

1. En hPanel, crear una base MySQL y un usuario con privilegios sobre esa base.
2. Ejecutar [`database/square-booking-ga4.sql`](../../database/square-booking-ga4.sql) una vez desde phpMyAdmin.
3. Añadir las variables `MYSQL_*` de [`.env.example`](../../.env.example) en la configuración de Node.js de Hostinger.

Las tablas conservan IDs técnicos, estados y resultados de entrega. No almacenan datos personales que Square incluya en el webhook.

## 2. Publicar como aplicación Node.js

1. En Hostinger, crear una aplicación en **Websites → Add Website → Deploy Web App**, inicialmente con el dominio temporal de Hostinger. Importar este repositorio desde GitHub o subir un ZIP del **código fuente** que incluya `package.json` y `package-lock.json`, pero excluya `node_modules`, `.next` y `out`.
2. Elegir Node.js 24. Hostinger debe detectar Next.js; conservar `npm run build` como comando de compilación y `npm run start` como comando de inicio.
3. Definir todas las variables de [`.env.example`](../../.env.example) en el paso de despliegue y publicar la aplicación temporal.
4. Probar en el dominio temporal las páginas, redirecciones, formularios, sitemap, eventos existentes y las rutas `/api/square/webhooks/bookings` y `/api/internal/booking-reconciliation` antes de cambiar el dominio de producción.
5. Descargar una copia del sitio estático actual y revisar sus recursos asociados. Cuando la aplicación temporal esté validada, quitar el sitio estático que hoy tiene asignado `cleanworxnj.com`, conectar ese dominio a la aplicación Node.js y volver a probarlo. Hostinger exige liberar un dominio que ya esté asignado a otro sitio antes de usarlo en una nueva aplicación Node.js.

No borrar el sitio estático antes de contar con el respaldo y la aplicación Node.js probada. Una exportación estática no puede recibir el `POST` de Square. Las redirecciones de SEO continúan en `next.config.mjs` bajo el servidor de Next.js.

## 3. Configurar Square y GA4

En Square Developer:

1. Crear o usar una aplicación de producción con permisos de vendedor `APPOINTMENTS_READ` y `APPOINTMENTS_ALL_READ`.
2. Crear la suscripción HTTPS con esta URL exacta: `https://www.cleanworxnj.com/api/square/webhooks/bookings`.
3. Suscribir `booking.created` y `booking.updated`.
4. Copiar la clave de firma a `SQUARE_WEBHOOK_SIGNATURE_KEY` y un token personal de producción con acceso de lectura a `SQUARE_ACCESS_TOKEN`. Events API no acepta un token OAuth de vendedor.
5. Habilitar Events API para la aplicación, para que la conciliación pueda recuperar avisos perdidos de hasta 28 días.

En GA4, crear un secreto de Measurement Protocol para el flujo `G-FRVB9W1H8D`, guardarlo en `GA4_MEASUREMENT_PROTOCOL_API_SECRET`, y definir un único `GA4_SERVER_CLIENT_ID` técnico estable. No usar el ID de un cliente ni enviar parámetros con información personal.

## 4. Programar conciliación y revisar alertas

Crear una tarea diaria en Hostinger que haga un `POST` a:

```text
https://www.cleanworxnj.com/api/internal/booking-reconciliation
Authorization: Bearer <BOOKING_RECONCILIATION_CRON_SECRET>
```

La respuesta JSON incluye `acceptedBookings`, `ga4SentBookings`, `pendingBookings` y `uncertainBookings`. Un resultado `needs_review`, valores pendientes o inciertos, o una respuesta distinta de 2xx requieren revisión humana. El historial queda en `square_booking_reconciliation_runs`.

La integración evita un segundo envío después de un error de red incierto, porque GA4 no ofrece una clave de idempotencia para ese `POST`; reenviarlo podría duplicar una cita. Esos casos quedan como `uncertain` para cotejarlos con el informe de GA4 antes de cualquier corrección manual.

## 5. Prueba controlada antes de marcar la conversión como clave

1. Desde Square Developer, enviar el evento de prueba y comprobar una respuesta 202.
2. Crear una reserva real de prueba que pase de `PENDING` a `ACCEPTED`, y otra creada por el equipo.
3. Confirmar una fila por reserva en `square_booking_conversions`, una por aviso en `square_booking_webhook_events`, y `ga4_status = sent`.
4. Verificar el evento `booking_completed` en GA4. Después, repetir la conciliación y comprobar que no cambió el conteo.
5. Solo entonces marcar `booking_completed` como evento clave o usarlo en una audiencia.

El evento se envía con un `client_id` técnico y sin `session_id`, por lo que representa una cita aceptada con fuente de marketing desconocida. No debe presentarse como una conversión atribuida a SEO, Ads ni a una campaña específica.
