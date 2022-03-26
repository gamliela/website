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

To run within Netlify environment:

```
$ pnpm exec netlify dev
```

#### Lint with ESLint

```
$ pnpm lint
```

#### Prettify with Prettier

```
$ pnpm format
```

#### Build & Deploy to Netlify

```
$ pnpm exec netlify deploy --build
```

This will deploy the local environment to Netlify. At the moment, images are broken when using this method. Waiting for
a fix. See: https://answers.netlify.com/t/netlify-next-js-images-throw-ipx-error-500/51632/21
