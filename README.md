# core-web example

[See the migration](https://github.com/mrhenry/core-web-example-script-tag/pull/1)

- uses `script type="module"` vs. `script nomodule`
- ensures browser support even when you have no access to a server-side process where you can detect user agents.

Although this method works and has some benefits it is not ideal.
It should only be used if using [polyfill.io](https://polyfill.io/v3/) is not possible and you can't detect user agents.

## Important bits :

- `webpack.config.js`
- `index.html`
- dependencies listed in `package.json`
