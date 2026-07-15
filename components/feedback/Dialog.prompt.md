Modal dialog. Click-scrim and Escape both fire onClose; put actions in `footer`.

```jsx
<Dialog open={open} onClose={close} title="Delete cluster?"
  description="This is irreversible."
  footer={<><Button variant="ghost" onClick={close}>Cancel</Button><Button variant="danger">Delete</Button></>} />
```
