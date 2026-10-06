# CleanWorx — fases de migración SEO y decisión para cada URL antigua

**Estado:** guía documental; no ejecuta cambios en el sitio. **Fecha de corte de datos:** 5 de octubre de 2026. **Propiedad:** `sc-domain:cleanworxnj.com`. **Periodo de métricas:** 3 de octubre de 2025 a 2 de octubre de 2026, búsqueda web, dimensión `page`.

## Qué decidió este análisis

- El [sitemap viejo](https://www.cleanworxnj.com/sitemap.xml) contiene **132 URL**. Search Console muestra **11 URL antiguas adicionales** que requieren acción, contadas por URL exacta. La home canónica `https://www.cleanworxnj.com/` seguirá sirviendo 200 y el propio `/sitemap.xml` se sustituirá; por eso no están en el anexo de redirecciones.
- **Resultado del anexo: 143 URL → 143 redirecciones 301, 0 retiradas 410.** No se forzó ninguna retirada por falta de clics: todas las rutas listadas tienen una intención de servicio, contacto, FAQ o galería con reemplazo propuesto. Reducir 143 URL antiguas a un conjunto pequeño de páginas nuevas es una consolidación real, aunque no se use 410.
- En las 132 URL exactas del sitemap, **53 tuvieron clics**, **52 tuvieron 0 clics pero sí impresiones** y **27 no aparecieron como fila** en esta consulta de GSC. `s/d` en la tabla significa sin fila devuelta, **no** cero tráfico, cero enlaces ni falta de indexación. Las cifras pueden diferir de un recuento agrupado por ruta que combine `www` y sin `www`.
- La cuenta de servicio permite consultar rendimiento, sitemaps e inspecciones. No expone el informe de **Acciones manuales** ni un inventario de enlaces externos; la agencia debe revisarlos en la interfaz antes de aplicar el mapa. El `indexed: 0` de la API de Sitemaps no es una señal de desindexación: [ese campo está obsoleto](https://developers.google.com/webmaster-tools/v1/sitemaps).
- Una `301` de la tabla es una **decisión de destino**, no una autorización para activarla ahora. Las páginas nuevas y sus bloques de servicio deben estar publicadas, verificadas y responder 200 antes del cambio. Google recomienda mapear las URL y evitar redirecciones a destinos no equivalentes: [guía de migración](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes). Si se descubre una URL sin sustituto real, se cambia su fila a **410** antes del lanzamiento, con motivo documentado; [Google indica 404/410 para contenido retirado sin reemplazo](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors).

## Fase 1 — Congelar la línea base

**Responsable:** agencia SEO. **Salida:** inventario de URL y medición pre-migración archivados.

1. Guardar el XML viejo y este anexo de 132 + 11 URL; registrar fecha, propiedad de GSC y método de extracción. Mantener la distinción entre URL exactas y variantes de host.
2. Exportar desde GSC páginas y consultas para los últimos 12 y 3 meses; conservar clics, impresiones, CTR y posición por página. No interpretar `s/d` como 0. Capturar las consultas que llevan tráfico a las URL principales de humo, faros, full detail y las cinco ciudades.
3. Revisar en la interfaz de GSC **Acciones manuales**, **Problemas de seguridad**, **Enlaces** e **Indexación de páginas**; guardar capturas o exportes. Identificar URL con enlaces externos y otras rutas de GA4/logs que no estén en este anexo. Una URL adicional se incorpora como nueva fila con una acción concreta.
4. Guardar una copia de los contenidos y elementos útiles del sitio viejo, incluida la estructura de enlaces e imágenes con derechos de uso. No reutilizar testimonios, paquetes, resultados ni afirmaciones no verificadas.

**Puerta de salida:** inventario archivado, métricas reproducibles y cualquier URL nueva añadida al anexo con `301` o `410` y motivo.

## Fase 2 — Validar negocio y pruebas locales

**Responsables:** CleanWorx aporta hechos y permisos; agencia documenta y revisa. **Salida:** expediente de contenidos aprobados.

1. Confirmar cobertura real y modalidad de atención para **Woodbridge, Edison, Westfield, Cranford y Bridgewater**. Reunir para cada ciudad al menos un trabajo, foto o testimonio auténtico con permiso y contexto verificable. Confirmar qué servicios se prestan allí; no presentar cada ciudad como sucursal.
2. Cotejar precios, duración, modalidad y alcance con el [catálogo de Square](./CATALOGO-SERVICIOS-SQUARE-2026-09-23.md) y las [reglas de hechos comerciales](./BUSINESS-FACTS-AND-SOURCE-RULES.md). Full detailing seguirá cubierto por la **home**.
3. Validar el servicio de **purificación con ozono** para la futura `/car-odor-treatment`: describir el tratamiento y sus límites, incluso para olor a humo, sin prometer eliminación total, sanitización ni remediación de moho. Validar el proceso y el precio de **restauración de faros** para `/headlight-restoration`, con resultados condicionados al estado del faro.
4. Revisar `/add-ons` para que la sección de limpieza de vano motor sea un reemplazo útil de las URL antiguas de ese tema; retirar o corregir datos de schema y copy que el catálogo no sostenga.

**Puerta de salida:** afirmaciones, imágenes y servicios aprobados para cada destino que recibirá redirecciones.

## Fase 3 — Preparar los destinos nuevos

**Responsables:** agencia redacta y aprueba; desarrollo implementará después en una tarea separada. **Salida:** destinos listos para recibir usuarios y Googlebot.

1. Completar en `/` una sección sustancial de full/complete detailing, orientación sobre precios reales o variables y enlaces a servicios. La home recibirá URL antiguas de detailing general, full detail y pricing; no basta una mención breve.
2. Preparar `/car-odor-treatment` y `/headlight-restoration` como páginas generales de servicios reales. Mantener `/ceramic-coating`, `/paint-correction`, `/interior-detailing`, `/exterior-detailing`, `/mobile-auto-detailing`, `/add-ons`, `/faq`, `/about`, `/contact` y `/our-work` con contenido correspondiente al mapa.
3. Preparar `/services` como índice navegable con `noindex, follow`, sin entrada en el sitemap y **sin redirecciones entrantes del anexo**. Resolver la redirección actual de `/services` a `/` cuando se ejecute la nueva web; actualizar los documentos que aún lo describen de otra manera.
4. Preparar las cinco páginas indexables con canonical propio, una sola H1 natural, datos de cobertura correctos, casos autorizados y enlaces a servicios generales. Cada una debe tratar de forma útil los temas que recibirá:

| Destino de ciudad | Contenidos mínimos derivados de las URL antiguas |
| --- | --- |
| `/service-areas/woodbridge-nj` | Detailing, limpieza de vano motor, tratamiento de humo y olor de mascotas, preguntas frecuentes y trabajos/fotos. Dar especial profundidad al tratamiento de olores: la antigua URL de humo recibió 120 clics. |
| `/service-areas/edison-nj` | Full, interior y exterior detailing; faros, vano motor y ceramic coating. La URL vieja de interior detallado y la de full detail tienen tráfico. |
| `/service-areas/westfield-nj` | Full, interior y exterior detailing; faros, vano motor, ceramic coating y olor a humo. |
| `/service-areas/cranford-nj` | Full, interior y exterior detailing; faros y vano motor. Dar especial profundidad a faros: la URL vieja recibió 48 clics. Incluir las variantes antiguas mal escritas como `crandford`. |
| `/service-areas/bridgewater-nj` | Full, interior y exterior detailing; faros, vano motor, ceramic coating, paint correction y olores. Conservar la intención amplia de las páginas `best car detailing`. |

Las secciones locales deben responder la intención específica y enlazar a `/car-odor-treatment`, `/headlight-restoration` o la página general adecuada. No duplicar párrafos entre ciudades ni trasladar promesas o reseñas del sitio viejo sin verificación. **La preferencia acordada es que incluso las URL antiguas de humo Woodbridge y faros Cranford redirijan a su página de ciudad**; por eso esas secciones son condición de publicación.

**Puerta de salida:** todos los destinos del anexo devuelven 200, son accesibles en HTML y explican el servicio o propósito que heredarán; las páginas indexables tienen canonical propio y `/services` es `noindex, follow` y queda fuera del sitemap.

## Fase 4 — Aplicar el mapa URL por URL

**Responsable:** desarrollo implementará después; agencia aprobará el resultado. **Salida:** cada URL antigua responde con la acción exacta del anexo.

1. Configurar cada `301` de servidor directamente al destino final HTTPS con `www`, sin pasar por `/services`, la home intermedia u otra URL antigua. Preservar los parámetros de campaña cuando proceda.
2. Para las cinco ciudades elegidas, seguir los destinos locales del anexo. Las páginas antiguas de otras ciudades se consolidan en la página general del mismo servicio; las de full/general detailing en la home y las de vano motor en una sección sustancial de `/add-ons`.
3. No activar redirecciones si falta una sección clave del destino. Resolver la insuficiencia de contenido **antes del cambio de dominio**, manteniendo la decisión documentada y revisando el anexo si se demuestra que no existe reemplazo. `410` se reserva a la retirada definitiva sin sustituto; en el inventario actual ninguna URL cumple esa condición tras la revisión.
4. Sustituir el sitemap viejo por uno que contenga solo URL nuevas indexables con respuesta 200. Excluir `/services`, todas las URL antiguas redirigidas y cualquier retirada 410. Actualizar los enlaces internos a los destinos finales.

**Puerta de salida:** 143 filas comprobadas; 143 respuestas `301` a destinos finales 200; cero bucles, destinos no indexables o cadenas evitables. Si la evidencia cambia, actualizar primero la fila y volver a probar.

## Fase 5 — Lanzamiento y vigilancia

**Responsables:** desarrollo despliega; agencia verifica y sigue GSC. **Salida:** migración rastreable y sin pérdidas evitables por errores técnicos.

1. En el momento del cambio, comprobar en producción una muestra de cada destino y **todas las URL del anexo** con una herramienta de crawl/HTTP. Enviar el nuevo sitemap desde la misma propiedad de GSC.
2. Durante la primera semana, revisar diariamente 301/404/410, canonicals, indexación y errores de sitemap. Durante las siguientes 12 semanas, comparar semanalmente clics e impresiones de páginas y grupos de ciudad/servicio frente a la línea base; registrar cualquier URL antigua que siga apareciendo o termine en destino incorrecto.
3. Revisar mensualmente después de las 12 semanas, corregir enlaces controlados que aún apunten a URL viejas y mantener las redirecciones por **al menos un año**. Las oscilaciones iniciales son posibles mientras Google vuelve a rastrear e indexar.

## Anexo A — 132 URL exactas del sitemap viejo

**Lectura:** métricas por URL exacta en GSC; `s/d` = no apareció como fila. Todos los destinos son rutas del dominio canónico `https://www.cleanworxnj.com`, salvo que se muestre URL absoluta. `301` es la decisión documental; la activación depende de las puertas de salida anteriores.

| Nº | URL antigua | Clics | Impresiones | Acción | Destino exacto | Motivo |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | `https://www.cleanworxnj.com/contact-detailing-basking-ridge-nj` | 0 | 2904 | 301 | `/contact` | La nueva página conserva el contacto, ubicación y solicitud de cita. |
| 2 | `https://www.cleanworxnj.com/auto-detailing-basking-ridge-pricing` | 10 | 3612 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 3 | `https://www.cleanworxnj.com/basking-ridge-nj-detailing` | s/d | s/d | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 4 | `https://www.cleanworxnj.com/full-detail-services-warren` | 0 | 3 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 5 | `https://www.cleanworxnj.com/clark-nj-full-detailing-services` | 2 | 229 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 6 | `https://www.cleanworxnj.com/westfield-full-detailing-services` | 0 | 87 | 301 | `/service-areas/westfield-nj` | Consolidar detailing completo de Westfield en su página local, con sección equivalente y prueba real. |
| 7 | `https://www.cleanworxnj.com/edison-nj-full-detailing-services` | 31 | 3310 | 301 | `/service-areas/edison-nj` | Consolidar detailing completo de Edison en su página local, con sección equivalente y prueba real. |
| 8 | `https://www.cleanworxnj.com/crandford-nj-full-detailing-services` | 0 | 40 | 301 | `/service-areas/cranford-nj` | Consolidar detailing completo de Cranford en su página local, con sección equivalente y prueba real. |
| 9 | `https://www.cleanworxnj.com/scotch-plains-nj-full-detailing-services` | 0 | 10 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 10 | `https://www.cleanworxnj.com/fords-nj-full-detailing-services` | 0 | 125 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 11 | `https://www.cleanworxnj.com/clark-nj-interior-detailing-services` | 1 | 138 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 12 | `https://www.cleanworxnj.com/westfield-interior-detailing-services` | 0 | 45 | 301 | `/service-areas/westfield-nj` | Consolidar detailing interior de Westfield en su página local, con sección equivalente y prueba real. |
| 13 | `https://www.cleanworxnj.com/interior-detail-services-warren-nj` | 0 | 88 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 14 | `https://www.cleanworxnj.com/edison-nj-interior-detailing-services` | 0 | 56 | 301 | `/service-areas/edison-nj` | Consolidar detailing interior de Edison en su página local, con sección equivalente y prueba real. |
| 15 | `https://www.cleanworxnj.com/crandford-nj-interior-detailing-services` | 7 | 632 | 301 | `/service-areas/cranford-nj` | Consolidar detailing interior de Cranford en su página local, con sección equivalente y prueba real. |
| 16 | `https://www.cleanworxnj.com/scotch-plains-nj-interior-detailing-services` | 1 | 193 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 17 | `https://www.cleanworxnj.com/fords-nj-interior-detailing-services` | s/d | s/d | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 18 | `https://www.cleanworxnj.com/exterior-detail-services-warren` | s/d | s/d | 301 | `/exterior-detailing` | Consolidar la intención de detailing exterior en su página de servicio verificado. |
| 19 | `https://www.cleanworxnj.com/car-cleaniing-services-warren` | 0 | 113 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 20 | `https://www.cleanworxnj.com/basking-ridge-nj-auto-detailing-services` | 2 | 2495 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 21 | `https://www.cleanworxnj.com/edison-nj-exterior-detailing-services` | 0 | 117 | 301 | `/service-areas/edison-nj` | Consolidar detailing exterior de Edison en su página local, con sección equivalente y prueba real. |
| 22 | `https://www.cleanworxnj.com/crandford-nj-exterior-detailing-services` | 0 | 130 | 301 | `/service-areas/cranford-nj` | Consolidar detailing exterior de Cranford en su página local, con sección equivalente y prueba real. |
| 23 | `https://www.cleanworxnj.com/scotch-plains-nj-exterior-detailing-services` | s/d | s/d | 301 | `/exterior-detailing` | Consolidar la intención de detailing exterior en su página de servicio verificado. |
| 24 | `https://www.cleanworxnj.com/fords-nj-interior-exterior-services-1` | 0 | 51 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 25 | `https://www.cleanworxnj.com/edison-nj-headlight-restoration` | 13 | 513 | 301 | `/service-areas/edison-nj` | Consolidar restauración de faros de Edison en su página local, con sección equivalente y prueba real. |
| 26 | `https://www.cleanworxnj.com/clark-nj-exterior-detailing-services` | 0 | 55 | 301 | `/exterior-detailing` | Consolidar la intención de detailing exterior en su página de servicio verificado. |
| 27 | `https://www.cleanworxnj.com/westfield-exterior-detailing-services` | 0 | 25 | 301 | `/service-areas/westfield-nj` | Consolidar detailing exterior de Westfield en su página local, con sección equivalente y prueba real. |
| 28 | `https://www.cleanworxnj.com/westfield-nj-headlight-resortation` | 0 | 125 | 301 | `/service-areas/westfield-nj` | Consolidar restauración de faros de Westfield en su página local, con sección equivalente y prueba real. |
| 29 | `https://www.cleanworxnj.com/clark-nj-headlight-restoration` | 0 | 69 | 301 | `/headlight-restoration` | Servicio real de restauración de faros; consolidar variantes geográficas en su página general. |
| 30 | `https://www.cleanworxnj.com/cranford-nj-headlight-restoration` | 48 | 4640 | 301 | `/service-areas/cranford-nj` | Consolidar restauración de faros de Cranford en su página local, con sección equivalente y prueba real. |
| 31 | `https://www.cleanworxnj.com/scotch-plains-nj-headlight-restoration` | 7 | 1073 | 301 | `/headlight-restoration` | Servicio real de restauración de faros; consolidar variantes geográficas en su página general. |
| 32 | `https://www.cleanworxnj.com/fords-nj-headlight-restoration` | 0 | 12 | 301 | `/headlight-restoration` | Servicio real de restauración de faros; consolidar variantes geográficas en su página general. |
| 33 | `https://www.cleanworxnj.com/clark-nj-car-cleaning-service` | 0 | 224 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 34 | `https://www.cleanworxnj.com/westfield-nj-car-cleaning-service` | 14 | 2973 | 301 | `/service-areas/westfield-nj` | Consolidar detailing completo de Westfield en su página local, con sección equivalente y prueba real. |
| 35 | `https://www.cleanworxnj.com/edison-nj-car-cleaning-service` | 2 | 226 | 301 | `/service-areas/edison-nj` | Consolidar detailing completo de Edison en su página local, con sección equivalente y prueba real. |
| 36 | `https://www.cleanworxnj.com/cranford-nj-car-cleaning-service` | 8 | 1547 | 301 | `/service-areas/cranford-nj` | Consolidar detailing completo de Cranford en su página local, con sección equivalente y prueba real. |
| 37 | `https://www.cleanworxnj.com/scotch-plains-nj-car-cleaning-services` | 1 | 218 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 38 | `https://www.cleanworxnj.com/fords-nj-car-cleaning-services` | 4 | 99 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 39 | `https://www.cleanworxnj.com/service-area-mobile-auto-detail-nj` | 45 | 4267 | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 40 | `https://www.cleanworxnj.com/woodbridge-nj-engine-bay-cleaning` | 49 | 3382 | 301 | `/service-areas/woodbridge-nj` | Consolidar limpieza del vano motor de Woodbridge en su página local, con sección equivalente y prueba real. |
| 41 | `https://www.cleanworxnj.com/edison-nj-engine-bay-cleaning` | 27 | 1786 | 301 | `/service-areas/edison-nj` | Consolidar limpieza del vano motor de Edison en su página local, con sección equivalente y prueba real. |
| 42 | `https://www.cleanworxnj.com/clark-nj-engine-bay-cleaning` | 1 | 467 | 301 | `/add-ons` | La limpieza del vano motor es oferta confirmada; /add-ons deberá incluir una sección sustancial y verificable. |
| 43 | `https://www.cleanworxnj.com/westfield-nj-engine-bay-cleaning` | 2 | 488 | 301 | `/service-areas/westfield-nj` | Consolidar limpieza del vano motor de Westfield en su página local, con sección equivalente y prueba real. |
| 44 | `https://www.cleanworxnj.com/scotch-plains-nj-engine-bay-cleaning` | 1 | 49 | 301 | `/add-ons` | La limpieza del vano motor es oferta confirmada; /add-ons deberá incluir una sección sustancial y verificable. |
| 45 | `https://www.cleanworxnj.com/cranford-nj-engine-bay-cleaning` | 3 | 232 | 301 | `/service-areas/cranford-nj` | Consolidar limpieza del vano motor de Cranford en su página local, con sección equivalente y prueba real. |
| 46 | `https://www.cleanworxnj.com/woodbridge-nj-detailing-questions` | 20 | 1370 | 301 | `/service-areas/woodbridge-nj` | Consolidar preguntas de Woodbridge en su página local, con sección equivalente y prueba real. |
| 47 | `https://www.cleanworxnj.com/colonia-nj-ceramic-coatings` | 1 | 149 | 301 | `/ceramic-coating` | Consolidar la intención de ceramic coating en su página de servicio verificado. |
| 48 | `https://www.cleanworxnj.com/edison-nj-ceramic-coating` | 0 | 21 | 301 | `/service-areas/edison-nj` | Consolidar ceramic coating de Edison en su página local, con sección equivalente y prueba real. |
| 49 | `https://www.cleanworxnj.com/clark-nj-ceramic-coating` | 3 | 1413 | 301 | `/ceramic-coating` | Consolidar la intención de ceramic coating en su página de servicio verificado. |
| 50 | `https://www.cleanworxnj.com/westfield-nj-ceramic-coating` | 8 | 9436 | 301 | `/service-areas/westfield-nj` | Consolidar ceramic coating de Westfield en su página local, con sección equivalente y prueba real. |
| 51 | `https://www.cleanworxnj.com/woodbridge-nj-auto-detailing-photos` | 0 | 103 | 301 | `/service-areas/woodbridge-nj` | Consolidar trabajos/fotos de Woodbridge en su página local, con sección equivalente y prueba real. |
| 52 | `https://www.cleanworxnj.com/woodbridge-nj-smoke-smell-removal` | 120 | 12706 | 301 | `/service-areas/woodbridge-nj` | Consolidar tratamiento de olores de Woodbridge en su página local, con sección equivalente y prueba real. |
| 53 | `https://www.cleanworxnj.com/clark-nj-smoke-smell-removal` | 0 | 87 | 301 | `/car-odor-treatment` | Consolidar la intención de olores/ozono en el tratamiento vehicular verificado, sin promesas absolutas. |
| 54 | `https://www.cleanworxnj.com/westfield-nj-smoke-smell-removal` | 30 | 3818 | 301 | `/service-areas/westfield-nj` | Consolidar tratamiento de olores de Westfield en su página local, con sección equivalente y prueba real. |
| 55 | `https://www.cleanworxnj.com/woodbridge-nj-pet-odor-removal-service` | 6 | 386 | 301 | `/service-areas/woodbridge-nj` | Consolidar tratamiento de olores de Woodbridge en su página local, con sección equivalente y prueba real. |
| 56 | `https://www.cleanworxnj.com/interior-detailing-edison-nj` | 33 | 2683 | 301 | `/service-areas/edison-nj` | Consolidar detailing interior de Edison en su página local, con sección equivalente y prueba real. |
| 57 | `https://www.cleanworxnj.com/auto-detailing-clark-new-jersey` | s/d | s/d | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 58 | `https://www.cleanworxnj.com/interior-detailing-clark-nj` | 10 | 971 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 59 | `https://www.cleanworxnj.com/the-best-auto-detailing-in-clark` | 0 | 56 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 60 | `https://www.cleanworxnj.com/the-best-auto-detailing-westfield-nj` | 4 | 1212 | 301 | `/service-areas/westfield-nj` | Consolidar detailing completo de Westfield en su página local, con sección equivalente y prueba real. |
| 61 | `https://www.cleanworxnj.com/the-best-auto-detailing-in-westfield-nj` | 4 | 1436 | 301 | `/service-areas/westfield-nj` | Consolidar detailing completo de Westfield en su página local, con sección equivalente y prueba real. |
| 62 | `https://www.cleanworxnj.com/detailing-in-new-jersey` | 46 | 7782 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 63 | `https://www.cleanworxnj.com/basking-ridge-nj-auto-detailing` | 11 | 1262 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 64 | `https://www.cleanworxnj.com/full-exterior-detailing-basking-ridge-nj` | 0 | 81 | 301 | `/exterior-detailing` | Consolidar la intención de detailing exterior en su página de servicio verificado. |
| 65 | `https://www.cleanworxnj.com/full-interior-detailing-basking-ridge-nj` | 0 | 37 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 66 | `https://www.cleanworxnj.com/basking-ridge-nj-full-detailing` | s/d | s/d | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 67 | `https://www.cleanworxnj.com/basking-ridge-nj-headlight-restoration` | s/d | s/d | 301 | `/headlight-restoration` | Servicio real de restauración de faros; consolidar variantes geográficas en su página general. |
| 68 | `https://www.cleanworxnj.com/basking-ridge-nj-engine-bay-cleaning` | 0 | 13 | 301 | `/add-ons` | La limpieza del vano motor es oferta confirmada; /add-ons deberá incluir una sección sustancial y verificable. |
| 69 | `https://www.cleanworxnj.com/basking-ridge-nj-ceramic-coating` | 0 | 99 | 301 | `/ceramic-coating` | Consolidar la intención de ceramic coating en su página de servicio verificado. |
| 70 | `https://www.cleanworxnj.com/basking-ridge-nj-odor-removal-service` | 0 | 107 | 301 | `/car-odor-treatment` | Consolidar la intención de olores/ozono en el tratamiento vehicular verificado, sin promesas absolutas. |
| 71 | `https://www.cleanworxnj.com/basking-ridge-nj-best-car-detailing` | 6 | 886 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 72 | `https://www.cleanworxnj.com/basking-ridge-nj-best-car-cleaning` | 3 | 91 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 73 | `https://www.cleanworxnj.com/bernardsville-nj-auto-detailing` | s/d | s/d | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 74 | `https://www.cleanworxnj.com/bernardsville-nj-full-exterior-detailing` | 0 | 62 | 301 | `/exterior-detailing` | Consolidar la intención de detailing exterior en su página de servicio verificado. |
| 75 | `https://www.cleanworxnj.com/bernardsville-nj-paint-correction` | 0 | 143 | 301 | `/paint-correction` | Consolidar la intención de paint correction en su página de servicio verificado. |
| 76 | `https://www.cleanworxnj.com/bernardsville-nj-full-interior-detailing` | 0 | 31 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 77 | `https://www.cleanworxnj.com/bernardsville-nj-full-detailing-services` | 0 | 65 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 78 | `https://www.cleanworxnj.com/bernardsville-nj-headlight-restoration` | s/d | s/d | 301 | `/headlight-restoration` | Servicio real de restauración de faros; consolidar variantes geográficas en su página general. |
| 79 | `https://www.cleanworxnj.com/bernardsville-nj-engine-bay-cleaning` | s/d | s/d | 301 | `/add-ons` | La limpieza del vano motor es oferta confirmada; /add-ons deberá incluir una sección sustancial y verificable. |
| 80 | `https://www.cleanworxnj.com/bernardsville-nj-ceramic-coating` | 1 | 167 | 301 | `/ceramic-coating` | Consolidar la intención de ceramic coating en su página de servicio verificado. |
| 81 | `https://www.cleanworxnj.com/bernardsville-nj-odor-removal-services` | 0 | 15 | 301 | `/car-odor-treatment` | Consolidar la intención de olores/ozono en el tratamiento vehicular verificado, sin promesas absolutas. |
| 82 | `https://www.cleanworxnj.com/bernardsville-nj-best-car-cleaning-services` | 0 | 13 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 83 | `https://www.cleanworxnj.com/bernardsville-nj-best-car-detailing-services` | 5 | 900 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 84 | `https://www.cleanworxnj.com/basking-ridge-nj-paint-correction` | 3 | 141 | 301 | `/paint-correction` | Consolidar la intención de paint correction en su página de servicio verificado. |
| 85 | `https://www.cleanworxnj.com/bedminster-nj-auto-detailing` | s/d | s/d | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 86 | `https://www.cleanworxnj.com/bedminster-nj-full-exterior-detailing` | 0 | 172 | 301 | `/exterior-detailing` | Consolidar la intención de detailing exterior en su página de servicio verificado. |
| 87 | `https://www.cleanworxnj.com/bedminster-nj-full-interior-detailing` | 0 | 28 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 88 | `https://www.cleanworxnj.com/bedminster-nj-full-detailing-services` | 0 | 5 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 89 | `https://www.cleanworxnj.com/bedminster-nj-headlight-restoration` | 0 | 28 | 301 | `/headlight-restoration` | Servicio real de restauración de faros; consolidar variantes geográficas en su página general. |
| 90 | `https://www.cleanworxnj.com/bedminster-nj-engine-bay-cleaning` | 1 | 369 | 301 | `/add-ons` | La limpieza del vano motor es oferta confirmada; /add-ons deberá incluir una sección sustancial y verificable. |
| 91 | `https://www.cleanworxnj.com/bedminster-nj-ceramic-coating` | s/d | s/d | 301 | `/ceramic-coating` | Consolidar la intención de ceramic coating en su página de servicio verificado. |
| 92 | `https://www.cleanworxnj.com/bedminster-nj-paint-correction` | s/d | s/d | 301 | `/paint-correction` | Consolidar la intención de paint correction en su página de servicio verificado. |
| 93 | `https://www.cleanworxnj.com/bedminster-nj-odor-removal` | 7 | 1912 | 301 | `/car-odor-treatment` | Consolidar la intención de olores/ozono en el tratamiento vehicular verificado, sin promesas absolutas. |
| 94 | `https://www.cleanworxnj.com/bedminster-nj-best-car-cleaning-services` | 4 | 396 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 95 | `https://www.cleanworxnj.com/bedminster-nj-best-car-detailing` | 1 | 75 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 96 | `https://www.cleanworxnj.com/basking-ridge-mobile-detailing-services` | 0 | 31 | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 97 | `https://www.cleanworxnj.com/bernardsville-nj-mobile-detailing-services` | 3 | 518 | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 98 | `https://www.cleanworxnj.com/bedminster-nj-mobile-detailing` | 0 | 49 | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 99 | `https://www.cleanworxnj.com/bridgewater-nj-auto-detaiiling` | 15 | 1245 | 301 | `/service-areas/bridgewater-nj` | Consolidar detailing completo de Bridgewater en su página local, con sección equivalente y prueba real. |
| 100 | `https://www.cleanworxnj.com/bridgewater-nj-exterior-detailing` | s/d | s/d | 301 | `/service-areas/bridgewater-nj` | Consolidar detailing exterior de Bridgewater en su página local, con sección equivalente y prueba real. |
| 101 | `https://www.cleanworxnj.com/bridgewater-nj-interior-detailing` | 0 | 91 | 301 | `/service-areas/bridgewater-nj` | Consolidar detailing interior de Bridgewater en su página local, con sección equivalente y prueba real. |
| 102 | `https://www.cleanworxnj.com/bridgewater-nj-full-detailing-services` | 21 | 1360 | 301 | `/service-areas/bridgewater-nj` | Consolidar detailing completo de Bridgewater en su página local, con sección equivalente y prueba real. |
| 103 | `https://www.cleanworxnj.com/bridgewater-nj-headlight-restoration` | 1 | 38 | 301 | `/service-areas/bridgewater-nj` | Consolidar restauración de faros de Bridgewater en su página local, con sección equivalente y prueba real. |
| 104 | `https://www.cleanworxnj.com/bridgewater-nj-engine-bay-cleaning` | s/d | s/d | 301 | `/service-areas/bridgewater-nj` | Consolidar limpieza del vano motor de Bridgewater en su página local, con sección equivalente y prueba real. |
| 105 | `https://www.cleanworxnj.com/bridgewater-nj-ceramic-coating` | 0 | 41 | 301 | `/service-areas/bridgewater-nj` | Consolidar ceramic coating de Bridgewater en su página local, con sección equivalente y prueba real. |
| 106 | `https://www.cleanworxnj.com/bridgewater-nj-paint-correction` | 0 | 111 | 301 | `/service-areas/bridgewater-nj` | Consolidar paint correction de Bridgewater en su página local, con sección equivalente y prueba real. |
| 107 | `https://www.cleanworxnj.com/bridgewater-nj-odor-removal` | 0 | 10 | 301 | `/service-areas/bridgewater-nj` | Consolidar tratamiento de olores de Bridgewater en su página local, con sección equivalente y prueba real. |
| 108 | `https://www.cleanworxnj.com/bridgewater-nj-best-car-cleaning` | 3 | 331 | 301 | `/service-areas/bridgewater-nj` | Consolidar detailing completo de Bridgewater en su página local, con sección equivalente y prueba real. |
| 109 | `https://www.cleanworxnj.com/bridgewater-nj-best-car-detailing` | 5 | 468 | 301 | `/service-areas/bridgewater-nj` | Consolidar detailing completo de Bridgewater en su página local, con sección equivalente y prueba real. |
| 110 | `https://www.cleanworxnj.com/premier-ceramic-coatings` | 0 | 883 | 301 | `/service-areas/bridgewater-nj` | El contenido actual trata ceramic coating en Bridgewater; consolidarlo en la página de esa ciudad. |
| 111 | `https://www.cleanworxnj.com/basking-ridge-nj-detailing-faq` | 0 | 49 | 301 | `/faq` | La página de preguntas frecuentes conserva esta intención informativa. |
| 112 | `https://www.cleanworxnj.com/far-hills-nj-auto-detailing-1` | 1 | 146 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 113 | `https://www.cleanworxnj.com/far-hills-nj-ceramic-coating` | 1 | 552 | 301 | `/ceramic-coating` | Consolidar la intención de ceramic coating en su página de servicio verificado. |
| 114 | `https://www.cleanworxnj.com/far-hills-full-exterior-detailing` | 0 | 8 | 301 | `/exterior-detailing` | Consolidar la intención de detailing exterior en su página de servicio verificado. |
| 115 | `https://www.cleanworxnj.com/963773025862` | s/d | s/d | 301 | `/interior-detailing` | El título y contenido actuales son detailing interior en Far Hills; el slug numérico no cambia su intención. |
| 116 | `https://www.cleanworxnj.com/far-hills-engine-detailing` | 0 | 50 | 301 | `/add-ons` | La limpieza del vano motor es oferta confirmada; /add-ons deberá incluir una sección sustancial y verificable. |
| 117 | `https://www.cleanworxnj.com/far-hills-ozone-treatment` | 15 | 1781 | 301 | `/car-odor-treatment` | Consolidar la intención de olores/ozono en el tratamiento vehicular verificado, sin promesas absolutas. |
| 118 | `https://www.cleanworxnj.com/far-hills-headlights-res` | 0 | 52 | 301 | `/headlight-restoration` | Servicio real de restauración de faros; consolidar variantes geográficas en su página general. |
| 119 | `https://www.cleanworxnj.com/far-hills-paint-correction` | 0 | 6 | 301 | `/paint-correction` | Consolidar la intención de paint correction en su página de servicio verificado. |
| 120 | `https://www.cleanworxnj.com/photo-gallery-basking-ridge` | 0 | 15 | 301 | `/our-work` | La nueva galería sustituye los trabajos/fotos antiguos con material verificado. |
| 121 | `https://www.cleanworxnj.com/about-us-detailing-basking-ridge-nj` | 0 | 1178 | 301 | `/about` | La nueva página conserva la información de la empresa y el equipo. |
| 122 | `https://www.cleanworxnj.com/mobile-detailing-in-basking-ridge` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 123 | `https://www.cleanworxnj.com/mobile-detailing-in-bernards-nj` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 124 | `https://www.cleanworxnj.com/mobile-detailing-in-bernardsville-nj` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 125 | `https://www.cleanworxnj.com/long-hill-nj-mobile-detailing` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 126 | `https://www.cleanworxnj.com/far-hills-nj-mobile-detailing` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 127 | `https://www.cleanworxnj.com/lyons-nj-mobile-detailing-1` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 128 | `https://www.cleanworxnj.com/bedminster-nj-mobile-detailing-1` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 129 | `https://www.cleanworxnj.com/madisonville-nj-mobile-detailing` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 130 | `https://www.cleanworxnj.com/somerset-nj-mobile-detailing` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 131 | `https://www.cleanworxnj.com/warren-nj-mobile-detailing` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |
| 132 | `https://www.cleanworxnj.com/berkeley-heights-nj-mobile-detailing` | s/d | s/d | 301 | `/mobile-auto-detailing` | La nueva página móvil explica servicio y confirmación de cobertura, sin abrir otra página local. |

## Anexo B — 11 URL antiguas adicionales detectadas en GSC

Estas URL no aparecen como cadenas exactas en el sitemap descargado. Incluyen variantes sin `www`, variantes HTTP y seis rutas distintas. La home canónica (`https://www.cleanworxnj.com/`, 405 clics y 28.262 impresiones) sigue siendo 200; `/sitemap.xml` (0 clics, 5 impresiones) es un recurso técnico que se reemplazará, no una página para 301/410.

| Nº | URL antigua | Clics | Impresiones | Acción | Destino exacto | Motivo |
| ---: | --- | ---: | ---: | --- | --- | --- |
| 1 | `http://www.cleanworxnj.com/` | 899 | 20212 | 301 | `https://www.cleanworxnj.com/` | Normalizar la variante de host/protocolo hacia la portada canónica HTTPS con www. |
| 2 | `https://cleanworxnj.com/interior-detailing-edison-nj` | 13 | 1944 | 301 | `/service-areas/edison-nj` | Consolidar detailing interior de Edison en su página local, con sección equivalente y prueba real. |
| 3 | `https://cleanworxnj.com/interior-detailing-clark-nj` | 5 | 1125 | 301 | `/interior-detailing` | Variante sin www. Consolidar la intención de detailing interior en su página de servicio verificado. |
| 4 | `https://www.cleanworxnj.com/interior-detail-services-colonia-nj` | 4 | 299 | 301 | `/interior-detailing` | Consolidar la intención de detailing interior en su página de servicio verificado. |
| 5 | `https://www.cleanworxnj.com/woodbridge-nj-auto-detailing` | 4 | 60 | 301 | `/service-areas/woodbridge-nj` | Consolidar detailing completo de Woodbridge en su página local, con sección equivalente y prueba real. |
| 6 | `https://cleanworxnj.com/auto-detailing-clark-new-jersey` | 3 | 1045 | 301 | `/` | Variante sin www. La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 7 | `https://cleanworxnj.com/` | 0 | 2 | 301 | `https://www.cleanworxnj.com/` | Normalizar la variante de host/protocolo hacia la portada canónica HTTPS con www. |
| 8 | `https://cleanworxnj.com/frequently-asked-questions-about-auto-detailing` | 0 | 26 | 301 | `/faq` | Variante sin www. La página de preguntas frecuentes conserva esta intención informativa. |
| 9 | `https://www.cleanworxnj.com/auto-detailing-colonia-pricing` | 0 | 160 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 10 | `https://www.cleanworxnj.com/car-cleaniing-services-colonia` | 0 | 7 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |
| 11 | `https://www.cleanworxnj.com/full-detail-services-colonia` | 0 | 2 | 301 | `/` | La portada cubrirá el detailing completo/general y enlazará a servicios y precios confirmados. |

## Fuentes y límites

- [Sitemap del sitio anterior](https://www.cleanworxnj.com/sitemap.xml), descargado el 5 de octubre de 2026; API de Search Console, propiedad `sc-domain:cleanworxnj.com`, tipo `web`, 3-oct-2025 a 2-oct-2026, dimensión `page`.
- [Plan de análisis previo](./LEGACY-URL-MIGRATION-PLAN.md), [mapeo de keywords y URL](./KEYWORD-URL-MAPPING.md), [catálogo de Square](./CATALOGO-SERVICIOS-SQUARE-2026-09-23.md), [reglas de hechos](./BUSINESS-FACTS-AND-SOURCE-RULES.md).
- [Google: migrar URL](https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes), [Google: 404/410 o 301 según reemplazo](https://developers.google.com/search/docs/crawling-indexing/troubleshoot-crawling-errors), [Google: noindex](https://developers.google.com/search/docs/crawling-indexing/block-indexing).
- GSC puede omitir consultas anonimizadas y páginas sin fila en el periodo. Los clics no revelan conversiones, valor comercial ni enlaces entrantes. La revisión de cobertura y permisos del cliente permanece como tarea de la fase 2, aunque las cinco ciudades se eligieron y el cliente/agencia afirmó que podrá aportar prueba local.

