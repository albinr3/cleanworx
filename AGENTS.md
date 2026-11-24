# Páginas de localidades

Para crear una página de una localidad, sigue la estructura existente en `/service-areas/bridgewater-nj` y `src/components/autodetail/CityServicePage.tsx`. La URL habitual es `/service-areas/<localidad>-nj`.

1. Revisa las páginas y los datos existentes, los servicios y precios vigentes, y cualquier información comprobable de la localidad. Mantén el diseño y la plantilla compartida; no copies afirmaciones específicas de otra localidad como si fueran propias.
2. En `src/data/cityServicePages.ts`, añade el slug a `citySlugs` y una entrada correspondiente en `cityPages`. Completa la introducción, las notas de citas, full detail y engine bay, los textos de los ocho servicios de `serviceTopics` y las preguntas frecuentes. Escribe contenido útil y específico, en inglés y acorde con los servicios reales. Indica que el taller está en Basking Ridge, que la disponibilidad móvil se confirma por cita y las condiciones y tarifas móviles vigentes; consulta las fuentes actuales del proyecto antes de mencionarlas.
3. Crea `src/app/service-areas/<slug>/page.tsx` siguiendo una ruta existente: exporta `metadata = getCityMetadata("<slug>")` y renderiza `<CityServicePage slug="<slug>" />`. La plantilla proporciona metadatos, URL canónica, breadcrumbs, enlaces y estructura de servicios.
4. Agrega el slug a la lista de localidades de `src/app/sitemap.ts`. La página `src/app/service-areas/page.tsx` genera automáticamente los enlaces a partir de `citySlugs`; actualiza sus descripciones de metadatos si enumeran las localidades.
5. Usa `photoIds`, `serviceStories` o `serviceMedia` únicamente para trabajos y recursos que realmente correspondan a la localidad y cuyo relato esté respaldado. No inventes clientes, ubicaciones, resultados ni testimonios. Si no hay casos comprobados, deja `photoIds: []` y omite los casos hasta contar con información verificable.
6. Revisa si existen URLs antiguas pertinentes en `legacy-redirects.mjs` y en el registro de migración. No cambies redirecciones automáticamente: evalúa la intención de cada URL y mantén sincronizadas las fuentes y archivos generados si se autoriza una modificación.
7. Ejecuta `npm run typecheck`, las comprobaciones de lint pertinentes y `npm run build`. Comprueba que la ruta, los enlaces internos, el sitemap, los metadatos y la presentación funcionan. Comunica cualquier verificación bloqueada y distingue los cambios locales de una publicación efectiva.


# Creación de casos documentados

Aplica estas instrucciones únicamente cuando se solicite crear casos documentados de trabajos de detailing para el sitio web.

- Narra un trabajo concreto en inglés estadounidense, en pasado y desde la perspectiva del negocio (we, our).
- Usa 2–3 párrafos, sin subtítulos; prioriza la naturalidad sobre la extensión.
- Comienza con el vehículo, su condición o la circunstancia que motivó el servicio. Integra la ciudad y la modalidad móvil o en taller de forma natural.- Identifica el vehículo(si no te lo proporciono), el servicio(si no te lo proporciono), la direccion del cliente tomaras una calle real de la ciudad de donde se este creando el caso documentado(ya que el cliente prefiere omitir por privacidad, asi que busca una de la ciudad, no tienes que confirmar, puedes atribuirla, es inaceptable que no pongas una calle). te dire cuando son servicios móviles o trabajos realizados en el shop.
- Cuenta cómo realizamos el trabajo, conectando las acciones con el contexto. No describas el paquete ni enumeres sus prestaciones como un catálogo.
- Cierra con un resultado observable, una inspección o una interacción documentada con el cliente.
- Evita consejos genéricos, frases publicitarias y referencias a las fotos.
- Varía las aperturas, el ritmo y los cierres entre casos.
-La imagen optimizala para seo.
- Redacta como si el propio técnico estuviera documentando un trabajo después de realizarlo. Incluye detalles específicos del vehículo, la ubicación, el procedimiento y el resultado. Evita explicar lo que normalmente incluye el servicio, justificar su contratación o mencionar acciones obvias.
