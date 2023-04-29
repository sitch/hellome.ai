# Mau

## Files

| Name             | Description                                     |
| ---------------- | ----------------------------------------------- |
| `./package.json` | Main package description, deps, scripts         |
| `yarn.lock`      | Similar to `poetry.lock` or `package-lock.json` |

## Commands

| Name                 | Description                                                                       |
| -------------------- | --------------------------------------------------------------------------------- |
| `yarn add <PACKAGE>` | Add package for instance `yarn add jest`                                          |
| `yarn dev`           | Start dev server                                                                  |
| `yarn fix`           | Run linters, formatters, typechecks, and tests                                    |
| `yarn test`          | Run `jest` tests                                                                  |
| `yarn cy.run`        | Run cypress and make sure the dev server is running with `yarn dev`               |
| `yarn cy.open`       | Run cypress in visual mode and make sure the dev server is running with `yarn dev |

## Workflow

### Tools 

- `yarn`
- `ts-node`
- `eslint`
- `prettier`
- `cspell`

### Libraries

- `markdown`
- `tailwindcss`
- `react`
- `cypress`
- `next.js`
- `jest`
- `mdx`
- `prisma`

### Install asdf

- `asdf plugin add nodejs`
- `asdf plugin add yarn`
- `asdf install nodejs 18.14.0`
- `asdf install yarn 1.22.19`
- `asdf install`
- `yarn` Install packages

### Install VSCode Extensions

- `tomoki1207.pdf`

### Run

- Open terminal panel `Ctrl + \``
- `yarn test.watch __tests__/pdf`
