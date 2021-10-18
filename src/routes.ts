import { NextFunction, Request, Response, Router } from "express";
import path from "path";


const route = Router();


route.get('/', (req: Request, res: Response, next: NextFunction) => {
  console.log({__dirname: __dirname || 'NOTHING'})
  res.sendFile(path.join(__dirname, '../client/demo.html'));
})


route.get('/hi', (req: Request, res: Response) => {
  res.json({ msg: 'Ahoy there!' });
})


export default route;