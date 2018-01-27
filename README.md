# Babel Plugin React Add Property

## Overview

This is a small Babel plugin for adding data attributes to React JSX elements. I created this plugin
to add meaningful identifiers for styled components. This allows our components to have a
designated attribute for end-to-end integration tests (without having to add them manually).

### Before

```jsx
<div class="Page-jLerck lhFHrB">
  <div class="Header-dJBcYZ dqmObD">...</div>
  <div class="Body-MnRsT gzvZiS">...</div>
</div>
```

### After

```jsx
<div class="Page-jLerck lhFHrB" data-test="Page">
  <div class="Header-dJBcYZ dqmObD" data-test="Header">
    ...
  </div>
  <div class="Body-MnRsT gzvZiS" data-test="Body">
    ...
  </div>
</div>
```

## Installation

This package is available on npm as `babel-plugin-react-add-property`, and you can find it
[here](https://www.npmjs.com/package/babel-plugin-react-add-property).

To install the latest stable version with Yarn:

```sh
$ yarn add --dev babel-plugin-react-add-property
```

...or with npm:

```sh
$ npm install babel-plugin-react-add-property
```

## Usage

### Via `.babelrc` (Recommended)

#### DEFAULT CONFIG

If you don't provide a property name, the attribute name will default to `data-test`.

> _**NOTE:** As these attributes are intended only for testing purposes, we're telling Babel to only
> use the plugin in our development environment. If you'd like to use this plugin in other
> environments, you'll need to specify them as well._

```json
// .babelrc

{
  "env": {
    "development": {
      "plugins": ["react-add-property"]
    }
  }
}
```

#### CUSTOM CONFIG

However, if you'd like to have a custom attribute name, you can pass it in with your `.bablerc`.

```json
// .babelrc

{
  "env": {
    "development": {
      "plugins": [["react-add-property", { "property": "data-qa" }]]
    }
  }
}
```

This custom config would transform this div:

```jsx
<div class="Header-dJBcYZ dqmObD">...</div>
```

to look like this:

```jsx
<div class="Header-dJBcYZ dqmObD" data-qa="Header">
  ...
</div>
```

#### Via CLI

```sh
babel --plugins react-add-property script.js
```

#### Via Node API

without options:

```js
require('babel-core').transform('code', {
  plugins: ['react-add-property'],
});
```

with options:

```js
require('babel-core').transform('code', {
  plugins: [['react-add-property', { property: 'data-qa' }]],
});
```

## Contributing

I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines][coc].

## License

[MIT][license]

[coc]: https://github.com/alanbsmith/babel-plugin-react-add-property/blob/master/.github/CONTRIBUTING.md
[license]: https://github.com/alanbsmith/babel-plugin-react-add-property/blob/master/LICENSE
