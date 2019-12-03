# Exercise 0

* Setup your typescript project
* Install some dependencies
  ```bash
  npm install express --save
  npm install @types/express --save-dev
  ```
* Create your typescript files:

  `index.ts`
  ```ts
  import { Request, Response } from 'express'
  import express from 'express';
  const app = express();
  const port: number = process.env.PORT || 3000

  app.get('/', (req: Request, res: Response) => {
    res.send('Hello world')
  })

  app.listen(port, () => console.log(`Open browser to http://localhost:${port}`));
  ```