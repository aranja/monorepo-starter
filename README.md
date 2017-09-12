# Monorepo Starter

This is a React monorepo using tux and yarn workspaces:

```
monorepo-starter
└── packages
    ├── starter-components  # Shared React components and styleguide
    └── starter-website     # Main website
```

We're using [yarn workspaces](https://yarnpkg.com/blog/2017/08/02/introducing-workspaces/) so you need to install the latest version of `yarn` to manage dependencies in this project, eg:

```
npm install --global yarn
```

# How the Monorepo works

The root folder has a `package.json` which only lists workspaces. Each workspace is a normal npm package that can depend on npm and workspace packages alike. No matter where you run yarn to install packages, they are merged and installed in the root `yarn.lock` and `node_modules` respectively.

So to get started, install dependencies with yarn (anywhere):

```
yarn
```

Then start up the website:

```
cd packages/starter-website
yarn start
```

Or work on the styleguide:

```
cd packages/starter-components
yarn storybook
```
