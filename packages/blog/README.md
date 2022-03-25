# My Website Blog

My personal website blog.

Used as lab for these technologies:

- React
- TypeScript
- Next.js (with PostCSS and CSS Modules)
- Tailwind CSS (with typography)
- ESLint (with `react-hooks` plugin)
- Prettier
- Netlify

#### Start Development Server

```
$ pnpm dev
```

#### Lint with ESLint

```
$ pnpm lint
```

#### Prettify with Prettier

```
$ pnpm format
```

#### Deploy to Netlify

```
$ pnpm deploy
```

For the first deploy, the script will link your local environment to account on Netlify.
To deploy to prod, add the `--prod` parameter.

It is also possible to simulate prod environment on your local machine, using [Netlify Dev](https://www.netlify.com/products/dev/).

```
$ pnpm dev-netlify
```
