# react boilerplate

React boilerplate

## Libraries

* [react-router](https://reacttraining.com/react-router/web/guides/quick-start)
* [react-query](https://github.com/tannerlinsley/react-query)
* [styled-components](https://www.styled-components.com/)
* [Rambda](https://github.com/selfrefactor/rambda)
* [luxon](https://moment.github.io/luxon/)

## VS Code

### Recommended extensions

* <https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint>
* <https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest>
* <https://marketplace.visualstudio.com/items?itemName=jonkwheeler.styled-components-snippets>
* <https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components>

### Common snippets  

[Common VS Code snippets](.vscode/snippets.code-snippets)

### Validate & Format on Save

```js
// VS Code  settings.json (Command Palette -> Preferences Open settings (JSON))
{
  .
  .
  .
  "eslint.autoFixOnSave":  true,
  "eslint.validate":  [
    "javascript",
    "javascriptreact",
    {"language":  "typescript",  "autoFix":  true  },
    {"language":  "typescriptreact",  "autoFix":  true  }
  ],
  "editor.formatOnSave":  true,
  "[javascript]":  {
    "editor.formatOnSave":  false,
  },
  "[javascriptreact]":  {
    "editor.formatOnSave":  false,
  },
  "[typescript]":  {
    "editor.formatOnSave":  false,
  },
  "[typescriptreact]":  {
    "editor.formatOnSave":  false,
  },
  .
  .
  .
}
```