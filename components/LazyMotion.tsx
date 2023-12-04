import { LazyMotion as FramerLazyMotion } from 'framer-motion';

const loadFeatures = () => import('./features').then((mod) => mod.default);

export function LazyMotion({ children }: { children: React.ReactNode }) {
  return (
    <FramerLazyMotion features={loadFeatures}>{children}</FramerLazyMotion>
  );
}
