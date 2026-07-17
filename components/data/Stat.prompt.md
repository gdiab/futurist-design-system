Compact KPI readout for dashboards.

```jsx
<Stat label="P99 latency" value="142" unit="ms" delta="12% wk" trend="down" lowerIsBetter />
```

Delta color is valence-based: improving metrics render `--success`, worsening `--danger`. `trend` states the direction the number moved; set `lowerIsBetter` for metrics where down is an improvement (latency, error rate) so a falling value reads green. Default (`lowerIsBetter` off) keeps up → green, down → red.
