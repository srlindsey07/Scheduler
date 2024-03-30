# Scheduler Frontend 

## Getting Started

First, run `npm install` then one of the following commands:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000).


## File Structure
```
.
├───public/ 
├───src/
│   └───app/
│       ├───route-a/              ->    /route-a
│       │   ├───sub-route/        ->    /route-a/sub-route
│       │   │   └───page.tsx
│       │   └───page.tsx
│       │
│       ├───route-b/              ->    /route-b
│       │   ├───[dynamic-route]/  ->    /route-b/something-dynamic
│       │   │   └───page.tsx
│       │   └───page.tsx
│       │
│       ├───(route-group)/
│       │   ├───route-group-a     ->    /route-group-a
│       │   │   └───page.tsx
│       │   └───route-group-b     ->    /route-group-b
│       │       └───page.tsx
│       │
│       ├───api/
│       │   └───apiroute/
│       │       └───route.ts
│       │
│       ├───lib/
│       │
│       ├───components/
│       │   ├───component-a
│       │   │   └───component-a.tsx
│       │   └───component-b
│       │       └───component-b.tsx
│       │
│       ├───services/
│       │   └───service.ts
│       │
│       ├───types/
│       │   └───TypeA.ts
│       │
│       ├───utils/
│       │   └───util-a.ts
│       │
│       ├───styles/
│       │   └───theme.ts
│       │
│       ├───favicon.ico
│       ├───globals.css
│       ├───layout.tsx
│       ├───page.module.css
│       └───page.tsx
│
├───.env
├───.eslintrc.json
├───.gitignore
├───.prettierignore
├───.prettierrc.json
├───next-env.d.ts
├───next.config.mjs
├───package-lock.json
├───package.json
├───README.md
├───tsconfig.json
```