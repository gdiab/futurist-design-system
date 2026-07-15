Dropdown action menu. Use `divider:true` for separators and `danger:true` for destructive items.

```jsx
<Menu trigger={<Button variant="secondary">Actions</Button>} items={[
  { label: 'Rename', shortcut: 'R' },
  { divider: true },
  { label: 'Delete', danger: true },
]} />
```
