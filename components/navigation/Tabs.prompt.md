Underlined navigation tabs with optional counts.

```jsx
<Tabs defaultValue="overview" tabs={[
  { value: 'overview', label: 'Overview' },
  { value: 'logs', label: 'Logs', count: 42 },
]} onChange={setTab} />
```
