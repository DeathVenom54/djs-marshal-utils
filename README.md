# djs-marshal-utils

Utilities for making bots with discord.js

> This package does not require djs-marshal, it is just named so because [djs-utils](https://www.npmjs.com/package/djs-utils) exists

## Installation

This package requires [discord.js](https://www.npmjs.com/package/discord.js)

```shell
npm install discord.js
```

```shell
# with npm
npm install djs-marshal-utils

# with yarn
yarn add djs-marshal-utils
```

## Importing

Example: Importing errorEmbed

```ts
// import whole package
import Utils from 'djs-marshal-utils';

Utils.embeds.errorEmbed();

// import group
import embeds from 'djs-marshal-utils/embeds'

embeds.errorEmbed();

// import specific util
import { errorEmbed } from "djs-marshal-utils/embeds";
```

## Documentation

[Documentation site](https://deathvenom54.github.io/djs-marshal-utils/index.html)
