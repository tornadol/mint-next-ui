# Button

The primary interactive control. Use `variant="primary"` (brand red) for any storefront CTA. Reserve `variant="secondary"` (iris blue) for the underlying UI-kit contexts (admin/settings/utility screens). `ghost` and `link` for tertiary actions.

```jsx
<Button variant="primary" size="lg" uppercase iconTrailing="ArrowLongRight">
  GET COLLECTING
</Button>
```

Variants: `primary` · `secondary` · `destructive` · `outline` · `ghost` · `link`.
Sizes: `sm` · `md` · `lg` · `icon` (40×40 square).
The hero CTA is intentionally NOT rounded (radius 0). Small/medium buttons use 4px.
