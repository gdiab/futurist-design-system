# Dashboard UI Kit — Observability Console

A data-dense recreation of a production telemetry console, the primary surface Futurist targets
(SaaS dashboards / developer tools).

**`index.html`** is a self-contained, interactive demo (open it directly):
- Login screen (dark split-panel with mono status readout) → click **Continue**.
- Fixed 240px sidebar nav + 52px top bar with search (`⌘K`), notifications, theme toggle, avatar.
- Overview: time-range tabs, 4-up KPI **Stat** row, throughput **BarChart**, incidents panel,
  and a dense **Services table** with status **Badges**, mono numerics, and hover rows.
- **Light + dark** via the sidebar/top-bar toggle (`[data-theme]`).

## Structure
The screens are composed from the design system's primitives (Button, IconButton, Badge, Card,
Stat, Switch, Table, Tabs). For reliable standalone rendering, `index.html` inlines compact,
token-styled copies of those primitives and transforms JSX in-browser with the classic runtime.

**In production code**, import the real components from the compiled bundle instead of the inlined
copies — the look is identical because both are driven by `styles.css` tokens.
