# Installation

## Direct Download / CDN

https://unpkg.com/vue-regex-colorize/dist/vue-regex-colorize 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-regex-colorize@{{ $version }}/dist/vue-regex-colorize.js
 
Include vue-regex-colorize after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-regex-colorize/dist/vue-regex-colorize.js"></script>
```

## NPM

```sh
$ npm install vue-regex-colorize
```

## Yarn

```sh
$ yarn add vue-regex-colorize
```

When used with a module system, you must explicitly install the `vue-regex-colorize` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-regex-colorize from 'vue-regex-colorize'

Vue.use(vue-regex-colorize)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-regex-colorize` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-regex-colorize.git node_modules/vue-regex-colorize
$ cd node_modules/vue-regex-colorize
$ npm install
$ npm run build
```

