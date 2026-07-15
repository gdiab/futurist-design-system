Dense data table. Mark numeric columns for mono, right-aligned figures; use `render` for cells like Badges.

```jsx
<Table dense columns={[
  { key: 'svc', header: 'Service' },
  { key: 'p99', header: 'P99', numeric: true },
  { key: 'status', header: 'Status', render: v => <Badge tone={v==='ok'?'success':'danger'}>{v}</Badge> },
]} rows={data} />
```
