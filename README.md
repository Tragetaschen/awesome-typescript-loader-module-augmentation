# awesome-typescript-loader-module-augmentation
Reproduction for module augmentation problem with the awesome-typescript-loader

```
npm install
webpack
```

Expected: no errors (invoking `tsc -p .` shows none)

Actual
```
ERROR in [default] C:\Users\kairu\Source\Repos\awesome-typescript-loader-module-augmentation\main.ts:1:15
Module '"C:/Users/kairu/Source/Repos/awesome-typescript-loader-module-augmentation/node_modules/@types/d3-shape/index"' has no exported member 'curveStepAfter'.

ERROR in [default] d3-fixup.d.ts:1:29
Cannot find module 'd3-shape'.
```
