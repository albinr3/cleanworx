# Diego Service Business Growth System — Skill & Slash Command

Skill modular basada en los marcos de trabajo y metodología de negocio de **Diego Abreu**, diseñada para diagnosticar, optimizar y escalar negocios de servicios (agencias, consultorías, coaching, servicios DFY/DWY).

Actúa de forma nativa mediante el comando slash **`/diego`** en entornos de programación asistida por IA compatibles con la especificación **AgentSkills / Codex / Antigravity**.

---

## Estructura del paquete

- `SKILL.md` — Archivo principal con metadata y directivas de activación para el comando `/diego`.
- `references/` — Módulos de consulta estructurados:
  - `00-core-system.md` — Principios y lógica transversal.
  - `01-content-strategy.md` — Estrategia de contenido (largo de nutrición + corto de descubrimiento).
  - `02-funnel-selection.md` — Criterios de selección de funnels según madurez y conciencia.
  - `03-lead-magnets.md` — Diseño de imanes de prospectos como filtro para DFY.
  - `04-offer-creation.md` — Creación de ofertas de alto valor y equilibrio DFY/DWY/DIY.
  - `05-email-marketing.md` — Secuencias de bienvenida, nutrición y venta.
  - `06-high-ticket-sales.md` — Estructura de llamada de venta y manejo de objeciones raíz.
  - `07-scaling-operations.md` — Escalado de procesos, margen, capacidad y SOPs.
  - `08-waitlist-strategy.md` — Compresión de demanda y listas de espera con escasez real.
  - `09-offer-gpt-engine.md` — Motor paso a paso de investigación y oferta.
- `sources/` — Transcripciones de referencia completas de los entrenamientos.

---

## Guía de Instalación

### 1. En Google Antigravity IDE

#### Instalación Global (Recomendado - Disponible en todos tus proyectos):
Copia la carpeta como `diego` en tu directorio de configuración de Gemini/Antigravity:

- **Windows (PowerShell):**
  ```powershell
  Copy-Item -Path "diego-service-business-skill" -Destination "$HOME\.gemini\config\skills\diego" -Recurse -Force
  ```
- **macOS / Linux:**
  ```bash
  mkdir -p ~/.gemini/config/skills
  cp -R diego-service-business-skill ~/.gemini/config/skills/diego
  ```

#### Instalación local en un repositorio/proyecto:
Copia la carpeta dentro de `.agents/skills/diego` en la raíz del proyecto:
```bash
mkdir -p .agents/skills
cp -R diego-service-business-skill .agents/skills/diego
```

> **Importante en Antigravity:** Tras instalar la skill, recarga la ventana del IDE (**`Ctrl + Shift + P`** -> **`Developer: Reload Window`**) para que indexe el nuevo comando `/diego` en el menú autocompletar.

---

### 2. En OpenAI Codex

#### Instalación Global:
```bash
mkdir -p ~/.codex/skills
cp -R diego-service-business-skill ~/.codex/skills/diego
```
*(También compatible en `~/.agents/skills/diego`)*

#### Uso en Codex:
Puedes invocarlo directamente en el prompt con:
```text
$diego Diagnostica el funnel de mi agencia
```
o
```text
/diego Ayúdame a estructurar una oferta de alto valor
```

---

### 3. En Cursor / Claude Code / VS Code Copilot / OpenClaw

Copia la carpeta en la ruta estándar de habilidades de agente:
```bash
mkdir -p .agents/skills/diego
cp -R diego-service-business-skill/* .agents/skills/diego/
```
Escribe `/diego` o menciona la skill en el chat para activarla.

---

### 4. En ChatGPT (Custom GPT)

Si deseas usarlo en ChatGPT Plus:
1. Crea un nuevo **Custom GPT**.
2. Pega el contenido de `SKILL.md` en la casilla **Instructions**.
3. Sube los archivos de la carpeta `references/` en la sección **Knowledge**.
4. Nombra el GPT: *Service Business Growth Advisor — Diego Framework*.

---

## Ejemplos de uso con `/diego`

Al escribir `/diego`, el agente aplica la secuencia diagnóstica y consulta los módulos correspondientes:

- `/diego Analiza mi negocio y dime cuál debería ser mi siguiente cuello de botella.`
- `/diego ¿Qué funnel usarías para una oferta de $3,000 en el nicho B2B y por qué?`
- `/diego Diseña un lead magnet que funcione como filtro para mi servicio Done-For-You.`
- `/diego Audita esta oferta por sellability (facilidad de venta) y deliverability (cumplimiento).`
- `/diego Diseña la secuencia de nurturing y bienvenida por email para esta oferta.`
- `/diego Cómo manejar la objeción de 'es muy caro' o 'tengo que hablarlo con mi socio' sin hacer descuentos.`
- `/diego Estamos al 100% de capacidad de clientes. ¿Cómo preparar las operaciones antes de contratar?`
