# My Website

My Personal Website.

Used as lab for these technologies:

- React
- TypeScript
- Next.js
- SCSS
- CSS Modules
- ESLint (with `react-hooks` plugin)
- Prettier
- Netlify

#### Start Development Server

```
$ yarn dev
```

#### Lint with ESLint

```
$ yarn lint
```

#### Prettify with Prettier

```
$ yarn prettify
```

#### Deploy to Netlify

```
$ yarn deploy
```

For the first deploy, the script will link your local environment to account on Netlify. 
To deploy to prod, add the `--prod` parameter.

It is also possible to simulate prod environment on your local machine, using [Netlify Dev](https://www.netlify.com/products/dev/).

```
$ yarn dev-netlify
```
