![Image 1](https://github.com/doinki/remix-dynamic-import/blob/main/1.png)

```tsx
// components/LazyMotion.tsx
import { LazyMotion as FramerLazyMotion } from 'framer-motion';

const loadFeatures = () => import('./features').then((mod) => mod.default);

export function LazyMotion({ children }: { children: React.ReactNode }) {
  return (
    <FramerLazyMotion features={loadFeatures}>{children}</FramerLazyMotion>
  );
}

// app/root.tsx
<LazyMotion>
  <Outlet />
</LazyMotion>;
```
