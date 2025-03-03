# HPC Repository Tools

[![](https://badgen.net/npm/v/@unocha/hpc-repo-tools)](https://www.npmjs.com/package/@unocha/hpc-repo-tools)

This repo contains tooling and configuration that the HPC Development Team uses
across our repositories.

## Usage

To use this repo, install the NPM package `@unocha/hpc-repo-tools`,
and configure as follows:

### Eslint

Create a `eslint.config.mjs` file with the following contents:

```js
import baseConfig from '@unocha/hpc-repo-tools/eslint.config.base.js';

export default {
  ...baseConfig,
  parserOptions: {
    project: true,
    tsconfigRootDir: import.meta.dirname,
  },
};
```

### Prettier

Create a `prettier.config.mjs` file with the following contents:

```js
export { default } from '@unocha/hpc-repo-tools/prettier.config.base.js';
```

### Commitlint

Create a `commitlint.config.mjs` file with the following contents:

```js
export { default } from '@unocha/hpc-repo-tools/commitlint.config.base.js';
```

### Label Syncing

We share the same label definitions across our repositories,
they can be synced to a particular repo by running the following command from
the root of this repository:

```
npx github-label-sync --labels .github/labels.yml --access-token <token> <owner>/<repo>
```

You can setup automatic (daily) syncing in your repository, and allow for a sync
to be triggered via the GitHub Actions UI with the following workflow:

```yaml
name: Sync Labels

on:
  workflow_dispatch: {}
  schedule:
    - cron: '30 16 * * *'

jobs:
  workflow:
    name: Run Label Sync
    runs-on: ubuntu-latest
    timeout-minutes: 5
    steps:
      - name: Clone UN-OCHA/hpc-repo-tools
        run: git clone https://github.com/UN-OCHA/hpc-repo-tools.git
      - name: Run github-label-sync
        run: npx github-label-sync --labels hpc-repo-tools/.github/labels.yml --access-token ${{ secrets.GITHUB_TOKEN }} $GITHUB_REPOSITORY
```

## License

Copyright 2020 United Nations Office for the Coordination of Humanitarian Affairs

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

<http://www.apache.org/licenses/LICENSE-2.0>

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
