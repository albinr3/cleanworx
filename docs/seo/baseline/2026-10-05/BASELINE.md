# Línea base de migración SEO — 5 de octubre de 2026

**Estado:** Fase 1 archivada. No se ha modificado producción, el sitemap de la nueva web ni ninguna redirección.

## Alcance y método

- **Propiedad:** `sc-domain:cleanworxnj.com`.
- **Fuente de rendimiento:** interfaz autenticada de Google Search Console, tipo de búsqueda `Web`, exportación `EXPORTAR → Descargar CSV`.
- **Corte:** 5 de octubre de 2026. La interfaz indicaba una actualización de datos de aproximadamente 8–8,5 horas antes de la extracción.
- **Inventario:** 132 URL exactas del sitemap antiguo + 11 URL adicionales detectadas por GSC = 143 URL con decisión documentada. Se congeló la versión del anexo usada para ese conteo en `SEO-MIGRATION-PHASES-AND-URL-LEDGER.md`.

## Artefactos

| Archivo | Contenido |
| --- | --- |
| `legacy-site/sitemap.xml` | Sitemap público anterior: 132 URL. SHA-256: `56003105FB6B77555FFE46063667A984AE4D5AE37B0BADAC2E4B02C6A1B2351B`. |
| `legacy-site/*.html` | Copia HTML de las 132 URL del sitemap. Es evidencia histórica; no autoriza reutilizar testimonios, resultados, ofertas ni imágenes. |
| `SEO-MIGRATION-PHASES-AND-URL-LEDGER.md` | Instantánea del mapa de 143 URL y su decisión 301/410. |
| `gsc/performance-2025-10-03-to-2026-10-02.zip` | Exportación completa de GSC: consultas, páginas, países, dispositivos, apariciones y filtros para 12 meses. |
| `gsc/performance-2026-07-04-to-2026-10-03.zip` | Exportación completa de GSC para los tres meses que ofreció la interfaz en la fecha de corte. |
| `gsc/queries-woodbridge-smoke-2025-10-03-to-2026-10-02.zip` | Consultas filtradas por la URL antigua de humo de Woodbridge. |
| `gsc/queries-edison-full-detail-2025-10-03-to-2026-10-02.zip` | Consultas filtradas por la URL antigua de full detail de Edison. |
| `gsc/coverage-2026-10-05.zip` | Exportación del informe de indexación de páginas. |
| `gsc/external-link-samples-2026-10-05.csv` | Muestra de enlaces externos exportada desde GSC. |
| `PRIORITY-PAGE-QUERY-SAMPLES.md` | Consultas de páginas prioritarias leídas y transcritas desde GSC, incluidas Cranford, Westfield y Bridgewater. |

## Resumen de rendimiento reproducible

| Periodo | Clics | Impresiones | CTR | Posición media |
| --- | ---: | ---: | ---: | ---: |
| 3-oct-2025 a 2-oct-2026 | 1.939 | 115.006 | 1,7 % | 23,2 |
| 4-jul-2026 a 3-oct-2026 | 525 | 24.894 | 2,1 % | 19,3 |

Estos totales son los agregados mostrados por la interfaz para la propiedad de dominio. No deben mezclarse con los subtotales por filas de página del anexo, ya que GSC puede agrupar hosts/variantes de forma distinta y omitir filas o consultas anonimizadas. `s/d` sigue significando «sin fila devuelta», no cero.

## Verificaciones de GSC realizadas

| Informe | Resultado al corte | Acción sobre el anexo |
| --- | --- | --- |
| Acciones manuales | «No se ha detectado ningún problema». | Ninguna URL añadida. |
| Problemas de seguridad | «No se ha detectado ningún problema». | Ninguna URL añadida. |
| Indexación de páginas | 62 indexadas; 78 sin indexar. Motivos mostrados: 5 con redirección, 17 rastreadas sin indexar, 1 `noindex`, 0 `404`, 55 descubiertas sin indexar. | Se archivó el exporte. No cambia la decisión del mapa de URL. |
| Enlaces | 10 enlaces externos en total. Las páginas destino más enlazadas fueron la home (7) y `/auto-detailing-basking-ridge-pricing` (3); ambas ya están inventariadas. | No apareció una ruta antigua adicional que deba añadirse. |

No se puso a disposición un exporte de GA4 ni de logs de servidor en este workspace/acceso. Por ello esta línea base no infiere rutas adicionales de esas fuentes; si se proporcionan antes del lanzamiento, cada URL nueva deberá incorporarse al anexo con acción (`301` o `410`) y motivo antes de activar redirects.

## Derechos y uso de contenidos antiguos

Los HTML y el sitemap se guardaron para comparar intención, estructura y elementos a sustituir. Las imágenes, testimonios, paquetes, resultados y afirmaciones del sitio anterior continúan **sin autorización de reutilización** hasta que CleanWorx confirme sus derechos, vigencia y contexto. El archivo no es una aprobación editorial.

## Puerta de salida de Fase 1

- [x] Inventario y anexo archivados, conservando URL exactas y variantes de host.
- [x] Métricas de páginas y consultas de 12 y 3 meses exportadas.
- [x] Consultas de humo, faros, full detail y las cinco ciudades prioritarias capturadas.
- [x] Revisados Acciones manuales, Seguridad, Enlaces e Indexación; exportes disponibles cuando el informe lo permite.
- [x] Contenido HTML histórico conservado; derechos de reutilización marcados como pendientes de validación.
- [x] Ninguna URL adicional fue descubierta por las fuentes accesibles.

La siguiente actividad es la **Fase 2**: validación de cobertura, pruebas locales, hechos comerciales, imágenes y permisos. Esta Fase 1 no autoriza aún cambios de rutas ni despliegues.
