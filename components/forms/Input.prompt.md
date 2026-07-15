Labeled single-line text input. Pass `error` to show the invalid state.

```jsx
<Input label="API endpoint" placeholder="https://" hint="HTTPS only" />
<Input label="Rate limit" suffix="req/s" defaultValue="120" />
<Input label="Email" error="Required" />
```

Affixes: prefix / suffix (mono). Sizes: sm / md / lg.
