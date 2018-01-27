# Babel Plugin React Add Properties

## 🚨 Note 🚨

_This lib is still a WIP and not pushed up to npm. You can test the module out by pulling it down
 locally and running `yarn link` in your local repos._

## Overview

This is a small Babel plugin for adding data attributes to React JSX elements. I created this plugin
 to add meaningful identifiers for styled components. This allows our components to have a
 designated attribute for end-to-end integration tests (without having to add them manually).

<table>
  <thead>
    <th>BEFORE</th>
    <th>AFTER</th>
  </thead>
  <tbody>
    <tr>
      <td>
        <pre>
          &lt;div class="Page-jLerck lhFHrB"&gt;
            &lt;div class="Header-dJBcYZ dqmObD"&gt;
            &lt;div class="Body-MnRsT gzvZiS"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </pre>
      </td>
      <td>
        <pre>
          &lt;div class="Page-jLerck lhFHrB" data-test="Page"&gt;
            &lt;div class="Header-dJBcYZ dqmObD" data-test="Header"&gt;
            &lt;div class="Body-MnRsT gzvZiS" data-test="Body"&gt;
            &lt;/div&gt;
          &lt;/div&gt;
        </pre>
      </td>
    </tr>
  </tbody>
</table>

## ~~Installation~~ (WIP)

~~This package is available on npm as babel-plugin-react-add-properties, and you can find it
 [here]().~~

~~To install the latest stable version with Yarn:~~

$ yarn add --dev babel-plugin-react-add-properties

~~...or with npm:~~

~~$ npm install babel-plugin-react-add-properties~~

## Usage

### Via `.babelrc` (Recommended)

#### DEFAULT CONFIG

If you don't provide a property name, the attribute name will default to `data-test`.

> _**NOTE:** As these attributes are intended only for testing purposes, we're telling Babel to only
 use the plugin in our development environment. If you'd like to use this plugin in other
 environments, you'll need to specify them as well._

```json
// .babelrc

{
  "env": {
    "development": {
      "plugins": ["react-add-properties"]
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
      "plugins": [["react-add-properties", { "property": "data-qa" }]]
    }
  }
}
```

#### Via CLI

```sh
babel --plugins react-add-properties script.js
```

#### Via Node API

without options:

```js
require("babel-core").transform("code", {
  plugins: ["react-add-properties"]
});
```

with options:

```js
require("babel-core").transform("code", {
  plugins: [["react-add-properties", { property: "data-qa" }]]
});
```

## Contributing

I am thankful for any contributions made by the community. By contributing you agree to abide by
the Code of Conduct in the [Contributing Guidelines][CoC].

## License

[MIT][License]

[CoC]: https://github.com/alanbsmith/babel-plugin-add-properties/blob/master/.github/CONTRIBUTING.md
[License]: https://github.com/alanbsmith/babel-plugin-add-properties/blob/master/LICENSE
