# rollup-plugin-graphql-esm

Reproduction of an error with `@rollup/plugin-graphql` v2.0.0

## Steps to reproduce

1. Clone this repo
2. Run `yarn install`
3. Run `yarn build`

## Expected result

The build should succeed.

## Actual result

The build fails with the following error:

```
Error [ERR_MODULE_NOT_FOUND]: Cannot find module '/development/rollup-plugin-graphql-esm/node_modules/graphql-tag/loader' imported from /development/rollup-plugin-graphql-esm/node_modules/@rollup/plugin-graphql/dist/es/index.js
Did you mean to import graphql-tag/loader.js?
    at new NodeError (node:internal/errors:371:5)
    at finalizeResolution (node:internal/modules/esm/resolve:418:11)
    at moduleResolve (node:internal/modules/esm/resolve:983:10)
    at defaultResolve (node:internal/modules/esm/resolve:1080:11)
    at ESMLoader.resolve (node:internal/modules/esm/loader:530:30)
    at ESMLoader.getModuleJob (node:internal/modules/esm/loader:251:18)
    at ModuleWrap.<anonymous> (node:internal/modules/esm/module_job:79:40)
    at link (node:internal/modules/esm/module_job:78:36)
```
