# eslint-config-vyce
Vyce Typescript style guide

## How to use

1. Install the package
```
npm install --save-dev eslint-config-vyce
```
2. Add `"extends": ['vyce']` to your `.eslintrc.js`

## How to develop
- Clone the repository
- Run `npm install` to install dependencies
- Make changes, create new branch and commit & push

## Versioning
Tightening of any checks means breaking change and should be published with major version release. Relaxation of rules and fixing issues are published under minor and patch versions.
- **Major:** Breaking changes and/or major ESLint version update
- **Minor:** Relaxation of rules or fine-tuning current rules. Also when tightening rules to warn
- **Patch:** Fixing of minor oversights

## How to publish new version
- Run `npm run version [patch|minor|major]` to bump the version
- Commit and push changes
- Create pull request to master
- Merge PR to master and GitHub Action will build, publish and then tag the commit if successful
