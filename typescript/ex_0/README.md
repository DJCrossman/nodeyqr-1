# Exercise 1

* Initialize your npm project
* Install some dev dependencies
  ```bash
  npm install nodemon typescript --save-dev
  ```
* Add some scripts to the `package.json`
  ```json
  {
    "scripts": {
      "build": "tsc",
      "start": "node dist/index.js",
      "watch-node": "nodemon dist/index.js --watch dist/ --ignore json/",
      "watch-ts": "tsc -w"
    }
  }
* Add a `tsconfig.json`
  ```json    
  {
    "compilerOptions": {
      "target": "es5",
      "outDir": "dist/",
      "module": "commonjs",
      "declaration": true,
      "noImplicitAny": true,
      "removeComments": true,
      "sourceMap": true,
      "newLine": "LF"
    },
    "files": [
      "src/index.ts"
    ]
  }
  ```
* Create your typescript files:

  `index.ts`
  ```ts
  import { summify } from './sum.service'

  const firstValue: number = summify(1,2)

  console.log(firstValue)
  ```

  `sum.service.ts`
  ```ts
  export function summify(...values: number[]) {
    return values.reduce((a,b) => a + b, 0)
  }
  ```