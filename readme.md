## Linked package paths resolving bug in Angular CLI 6.0.0-rc.5

Reproduction example for the [issue](https://github.com/angular/angular-cli/issues/10323).

### Steps

1. Just copy local package to `node_modules` and run CLI serve command:
```
cd ng6
yarn
cp -r ../linked-package/ node_modules/linked-package
ng serve
```
2. Build performs correct
3. Now do the same but via `yarn link` command
```
cd ../linked-package
yarn link
cd ../ng6
yarn link "linked-package"
ng serve
```
4. Compiler is trying to resolve `linked-package` with relative path `../linked-package/index.ts` and throws an error:
```
ERROR in ../linked-package/index.ts
Module build failed: Error: /Users/akrasman/work/dmpkit/ng6-link-package/linked-package/index.ts is missing from the TypeScript compilation. Please make sure it is in your tsconfig via the 'files' or 'include' property.
    at AngularCompilerPlugin.getCompiledFile (/Users/akrasman/work/dmpkit/ng6-link-package/ng6/node_modules/@ngtools/webpack/src/angular_compiler_plugin.js:707:23)
    at plugin.done.then (/Users/akrasman/work/dmpkit/ng6-link-package/ng6/node_modules/@ngtools/webpack/src/loader.js:41:31)
    at <anonymous>
```


