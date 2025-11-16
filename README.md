# My Portfolio

## Development
- Use Node.js 22.x locally to match the `package.json` engine field and the Vercel runtime. With `nvm-windows` this is typically `nvm use 22`. Using older runtimes (for example Node 20) will keep printing agent warnings during installs.
- Install dependencies with `pnpm install`.
- Start the dev server with `pnpm start` (now powered by CRACO).
- Build for production with `pnpm run build`.

## Tooling Notes
- The project uses [CRACO](https://github.com/dilanx/craco) to suppress noisy third-party source map warnings coming from `react-zoom-pan-pinch` without ejecting from CRA. The configuration lives in `craco.config.js`.
- Run `pnpm dlx update-browserslist-db@latest` periodically to keep the Browserslist data fresh and avoid CLI warnings.
