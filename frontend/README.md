# Scheduler Frontend 

## Getting Started
The frontend application assumes that you are running the backend application on localhost:8081, which is the default. The port can be updated in the .env file.

With the backend application running, open terminal or command prompt and run `npm install` then `npm run dev`.

Open [http://localhost:3000](http://localhost:3000).

## Todo and In Progess Items
* Unit tests
* Create new appointment (In progress)

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
