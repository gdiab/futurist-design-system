Primary action trigger — use for the main action on a view; downgrade the rest to secondary/ghost.

```jsx
<Button variant="primary" size="md">Deploy</Button>
<Button variant="secondary" iconLeft={<Icon name="plus" />}>New</Button>
<Button variant="ghost" size="sm">Cancel</Button>
<Button variant="danger">Delete</Button>
```

Variants: primary · secondary · ghost · danger. Sizes: sm (26px) · md (32px) · lg (40px). Supports iconLeft/iconRight and fullWidth.
