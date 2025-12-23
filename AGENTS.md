# Agent Guidelines for zumwa.lt-astro

## Commands
- **Dev**: `pnpm dev` or `npm run dev`
- **Build**: `pnpm build` or `npm run build`
- **Type Check**: `tsc --noEmit` (globally installed)
- **Preview**: `pnpm preview`

## Project Stack
- Astro 5 with SSR (Vercel adapter)
- React 19 + TypeScript (strict mode via `astro/tsconfigs/strict`)
- Three.js + @react-three/fiber + postprocessing for 3D/WebGL
- CSS modules for styling (see `Dither.css`)
- Middleware for reverse proxy (`/2012/*` → `https://zumwalt.github.io`)

## Code Style
- **Functions**: Use function declarations (not arrow functions) for components
- **Props**: Inline type with function params: `function Foo(props: FooProps)`
- **Types**: Prefer `interface` over `type` for props; strict typing (no `any`)
- **Imports**: React/library imports first, then local imports, then CSS last
- **Naming**: PascalCase for components, camelCase for everything else
- **React Components**: Client components need `client:only="react"` in Astro files
