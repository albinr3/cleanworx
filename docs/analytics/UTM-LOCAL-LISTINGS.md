# Convención UTM — fichas locales

**Estado:** vigente desde el 15 de octubre de 2026.  
**Propietario:** marketing / analítica de CleanWorx.  
**Alcance:** enlaces de sitio web publicados en Google Business Profile (GBP), Bing Places y Apple Business Connect / Apple Maps.

## Objetivo

Medir las visitas que salen de cada ficha local hacia el sitio canónico de CleanWorx sin mezclarlas con campañas pagadas ni fragmentar los informes de GA4.

La URL base autorizada es siempre `https://www.cleanworxnj.com/`. Las páginas internas se usan solo cuando el enlace de la ficha describe exactamente esa página; no se cambia el etiquetado para compensar un destino poco pertinente.

## Estructura obligatoria

```text
https://www.cleanworxnj.com/{ruta}?utm_source={origen}&utm_medium=organic&utm_campaign={ficha}&utm_content={ubicacion}
```

| Parámetro | Regla | Valores de este alcance |
| --- | --- | --- |
| `utm_source` | Plataforma que envía la visita. Minúsculas y guion bajo cuando corresponda. | `google`, `bing`, `apple_maps` |
| `utm_medium` | Tipo de adquisición, no el nombre de la plataforma. | `organic` |
| `utm_campaign` | Ficha o programa persistente que permite separar la visita dentro de GA4. | `gbp`, `bing_places`, `apple_business_connect` |
| `utm_content` | Ubicación o tipo de enlace dentro de la ficha. | `website` para el enlace principal al sitio; usar un valor aprobado y descriptivo para otro enlace elegible. |

No dejar ninguno de los cuatro parámetros vacío, no usar mayúsculas ni espacios y no cambiar un valor existente por sinónimos. Por ejemplo, no usar `Google`, `google-maps`, `GBP`, `bingplaces` o `apple`.

`utm_term`, `utm_id`, `gclid`, `gbraid` y `wbraid` no se añaden a enlaces orgánicos de estas fichas. Los tres últimos pertenecen a medición publicitaria; en particular, Apple no permite `gclid` en las URLs de Actions.

## URLs listas para publicar

Pegar estas URLs en el campo **Website / Sitio web** de la ficha correspondiente:

| Ficha | URL aprobada |
| --- | --- |
| Google Business Profile | `https://www.cleanworxnj.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp&utm_content=website` |
| Bing Places | `https://www.cleanworxnj.com/?utm_source=bing&utm_medium=organic&utm_campaign=bing_places&utm_content=website` |
| Apple Business Connect / Apple Maps | `https://www.cleanworxnj.com/?utm_source=apple_maps&utm_medium=organic&utm_campaign=apple_business_connect&utm_content=website` |

## Posts de Google Business Profile

Los posts de GBP no usan la campaña `gbp`, que queda reservada para el enlace principal de la ficha. Cada post usa una campaña común para poder ver el rendimiento agregado de los posts y un `utm_content` único para identificar la pieza concreta.

```text
https://www.cleanworxnj.com/{ruta-relevante}?utm_source=google&utm_medium=organic&utm_campaign=gbp_posts&utm_content={tipo}_{tema}_{aaaammdd}
```

| Campo | Valor o patrón obligatorio | Ejemplo |
| --- | --- | --- |
| `utm_source` | `google` | `google` |
| `utm_medium` | `organic` | `organic` |
| `utm_campaign` | `gbp_posts` | `gbp_posts` |
| `utm_content` | `{tipo}_{tema}_{aaaammdd}`; un identificador único por post. `tipo` puede ser `update`, `offer` o `event`. `tema` describe el asunto en inglés, minúsculas y con guion bajo. | `offer_window_tinting_20261015` |

Ejemplos listos para publicar:

| Tipo de post | Destino | URL |
| --- | --- | --- |
| Update sobre polarizado | `/window-tinting` | `https://www.cleanworxnj.com/window-tinting?utm_source=google&utm_medium=organic&utm_campaign=gbp_posts&utm_content=update_window_tinting_20261015` |
| Oferta de coating | `/ceramic-coating` | `https://www.cleanworxnj.com/ceramic-coating?utm_source=google&utm_medium=organic&utm_campaign=gbp_posts&utm_content=offer_ceramic_coating_20261015` |
| Evento/promoción de detailing | `/contact` | `https://www.cleanworxnj.com/contact?utm_source=google&utm_medium=organic&utm_campaign=gbp_posts&utm_content=event_detailing_20261015` |

Sustituir solo `tipo`, `tema` y fecha para cada post nuevo; no reutilizar `utm_content`. El destino debe cumplir exactamente la promesa del post. Si una oferta aún no tiene una página canónica que explique sus condiciones, dirigir a `/contact` o no publicarla hasta poder verificarla. No etiquetar un post de GBP como `cpc`, `paid`, `google_ads` ni añadir identificadores de clic publicitario.

## Páginas internas y Actions

Una ficha no debe enviar todo al inicio por defecto. Si el enlace representa una acción o servicio específico y la plataforma permite usar una URL distinta, apuntar a una página canónica que responde a esa intención y conservar la misma taxonomía. Ejemplo de una acción de reservas que primero lleva al contacto:

```text
https://www.cleanworxnj.com/contact?utm_source=apple_maps&utm_medium=organic&utm_campaign=apple_business_connect&utm_content=book_appointment
```

Antes de publicar una Action de Apple, comprobar que el tipo de acción, la URL de destino y las reglas de aprobación vigentes de Apple son compatibles. No reutilizar la misma URL exacta para Action types diferentes si Apple no lo permite.

No crear un enlace de "Book" hacia Square con estas UTMs hasta verificar que Square conserva los parámetros en toda la ruta y que la medición de la reserva final está disponible. Hoy el sitio solo mide `booking_click`; no mide `booking_completed`.

## Lectura en GA4

1. Abrir **Informes > Adquisición > Adquisición de tráfico**.
2. Usar la dimensión **Fuente/medio de la sesión** y añadir **Campaña de la sesión** y **Contenido manual del anuncio de la sesión** cuando sea necesario.
3. Filtrar la campaña de la sesión por `gbp`, `bing_places` o `apple_business_connect`.
4. Para resultados de negocio, cruzar sesiones con `generate_lead`, `click_call` y `booking_click`; ninguno de los dos últimos confirma una cita completada.

Para los posts de GBP, filtrar **Campaña de la sesión = `gbp_posts`** y desglosar por **Contenido manual del anuncio de la sesión**. Así se puede comparar cada post sin crear una campaña distinta por cada publicación.

El valor `organic` mantiene estos enlaces separados de tráfico pagado. La distinción entre búsqueda orgánica y ficha local se hace con **Campaña de la sesión**, no alterando los valores de `source` ni usando un medio inventado como `organic_listing`.

## Control de cambios

- Añadir una nueva ficha o enlace solo con una fila nueva en este documento antes de publicarlo.
- Mantener los valores históricos: crear una variante solo si cambia de verdad el origen, la ficha o la ubicación del enlace.
- Probar la URL final en incógnito después de cada modificación: debe cargar una URL canónica con los cuatro UTMs intactos y sin redirecciones inesperadas.
- Revisar mensualmente en GA4 que no haya variantes de mayúsculas, espacios codificados o campañas `not set`.

## Referencias

- Google Analytics recomienda usar de forma consistente `utm_source`, `utm_medium` y `utm_campaign`, y advierte que los valores distinguen mayúsculas y minúsculas: [URL builders de GA4](https://support.google.com/analytics/answer/10917952?hl=es).
- Apple permite UTMs en Actions, pero prohíbe parámetros `gclid`: [Action URL standards and guidelines](https://support.apple.com/guide/business/action-url-standards-and-guidelines-abcb06152096/web).
