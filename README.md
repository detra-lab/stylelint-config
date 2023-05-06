# Stylelint Config

[![NPM Version][npm_version_badge]][npm_badge_url]
[![NPM Downloads][npm_downloads_badge]][npm_badge_url]
[![CI Status][ci_badge]][npm_badge_url]

Modular and opinionated [Stylelint](https://stylelint.io) configuration with support for CSS or PostCSS syntax, SASS language, and some CSS in JS solutions, like [Styled Components](https://github.com/styled-components/styled-components) or [Emotion.js](https://github.com/emotion-js/emotion) template literals.

- [Stylelint Config](#stylelint-config)
  - [Available Configurations](#available-configurations)
  - [CSS Properties Order](#css-properties-order)
  - [Extending the Configuration](#extending-the-configuration)
  - [Integrating Stylelint into the IDEs/Editors](#integrating-stylelint-into-the-ideseditors)
  - [Thanks](#thanks)
  - [License](#license)

> The following Stylelint configurations do not include code formatting rules, which are therefore delegated to [Prettier](https://prettier.io/). Please, use the [`@detra-lab/prettier`](https://github.com/detra-lab/prettier-config) to handle this type of need.

## Available Configurations

<details>

<summary><strong>CSS/PostCSS Syntax</strong></summary>

1. Install the config:

   ```sh
   npm add --save-dev @detra-lab/stylelint-config stylelint
   ```

2. Create a `.stylelintrc.json` file in the root of your project, and extend the following configuration from it:

   ```json
   {
     "extends": "@detra-lab/stylelint-config"
   }
   ```

3. Use the ESLint CLI to check supported files. Drop this line into your package.json under the scripts property:

   ```diff
   {
     "scripts": [
   +   "check:css": "stylelint ./styles/*.css"
     ]
   }
   ```

4. Lint your code with Stylelint:

   ```sh
   npm run check:css
   ```

   </details>

<details>

<summary><strong>SCSS Syntax</strong></summary>

1. Install the config:

   ```sh
   npm add --save-dev @detra-lab/stylelint-config stylelint stylelint-scss postcss-scss
   ```

2. Create a `.stylelintrc.json` file in the root of your project, and extend the following configuration from it:

   ```json
   {
     "extends": [
       "@detra-lab/stylelint-config",
       "@detra-lab/stylelint-config/sass"
     ]
   }
   ```

3. Use the ESLint CLI to check supported files. Drop this line into your package.json under the scripts property:

   ```diff
   {
     "scripts": [
   +   "check:css": "stylelint ./styles/*.scss"
     ]
   }
   ```

4. Lint your code with Stylelint:

   ```sh
   npm run check:css
   ```

   </details>

<details>

<summary><strong>CSS in JS (Template Literals)</strong></summary>

1. Install the config:

   ```sh
   npm add --save-dev @detra-lab/stylelint-config stylelint postcss-styled-syntax
   ```

2. Create a `.stylelintrc.json` file in the root of your project, and extend the following configuration from it:

   ```json
   {
     "extends": [
       "@detra-lab/stylelint-config",
       "@detra-lab/stylelint-config/styled"
     ]
   }
   ```

3. Use the Stylelint CLI to check supported files. Drop this line into your package.json under the scripts property:

   ```diff
   {
     "scripts": [
   +   "check:css": "stylelint ./styles/*.{js,jsx,ts,tsx}"
     ]
   }
   ```

4. Lint your code with Stylelint:

   ```sh
   npm run check:css
   ```

   </details>

## CSS Properties Order

Stylelint Config sorts the CSS property declarations by grouping them in the following order:

1. Positioning
2. Box Model
3. Typography
4. Visual
5. Animation
6. Misc

## Extending the Configuration

You can extend the configuration and override some rules. Add the `rules` property inside the `.stylelintrc.json` file and then choose what to turn on or off.

```jsonc
{
  "extends": "@detra-lab/stylelint-config",
  "rules": [
    // Customize your rules
    "selector-id-pattern": null,
    "selector-class-pattern": null
  ]
}
```

## Integrating Stylelint into the IDEs/Editors

<details>

<summary><strong>Visual Studio Code</strong></summary>

1. Install the [Stylelint Plugin](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)

2. Add the following code to your `.vscode/settings.json`:

   ```jsonc
   "css.validate": false,
   "scss.validate": false,
   "editor.codeActionsOnSave": {
     "source.fixAll.stylelint": true
   },
   "stylelint.validate": ["css"] // Add the type of file you want to validate (e.g. ["css", "scss", "typescript", "typescriptreact"])
   ```

3. (Optional) Highlight the CSS-in-JS syntax with the [Styled Components Plugin](https://marketplace.visualstudio.com/items?itemName=styled-components.vscode-styled-components)
</details>

## Thanks

- [stylelint-declaration-block-no-ignored-properties](https://github.com/kristerkari/stylelint-declaration-block-no-ignored-properties)
- [stylelint-order](https://github.com/hudochenkov/stylelint-order)
- [stylelint-scss](https://github.com/kristerkari/stylelint-scss)

## License

[MIT License](./LICENSE)

<!-- Badges -->

[ci_badge]: https://img.shields.io/github/actions/workflow/status/detra-lab/stylelint-config/tests.yml?style=flat-square&colorA=6930C3&colorB=5390D9
[npm_version_badge]: https://img.shields.io/npm/v/@detra-lab/stylelint-config?style=flat-square&colorA=6930C3&colorB=5390D9
[npm_downloads_badge]: https://img.shields.io/npm/dm/@detra-lab/stylelint-config?style=flat-square&colorA=6930C3&colorB=5390D9

<!-- Links -->

[ci_badge_url]: https://github.com/detra-lab/stylelint-config/actions/workflows/tests.yml
[npm_badge_url]: https://www.npmjs.com/package/@detra-lab/stylelint-config
