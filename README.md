# React Web Component

> The repository contains a basic scaffold structure for developing typescript react components exposed as [Web Components](https://developer.mozilla.org/en-US/docs/Web/Web_Components)

It exposes a sample `Product List` component:

```html
<product-list
  title="My products"
  description="List of products"
  amount="20"
></product-list>
```

### Bundler

The project is bundled with [Parcel](https://parceljs.org/) an easy to go bundler with zero configuration, the project provides two scripts:

```javascript
"scripts": {
  "dev": "parcel demo/index.html --out-dir .cache/dist",
  "build": "parcel build src/index.tsx"
},
```

- The `dev` script enables a [demo page]() exported on `localhost:1234`;
- The `build` script bundles, in a `dist` folder, a production ready script;

### backwards compatibility

The Web Component backwards compatibility is done with: [@webcomponents/webcomponentsjs](https://www.webcomponents.org/polyfills)
