import { NextFunction, Request, Response, Router } from "express";
import path from "path";
import DBmodels from "./DBmodels";


const route = Router();


route.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log({ __dirname: __dirname || 'NOTHING' })
    res.sendFile(path.join(__dirname, '../client/demo.html'));
  } catch (err: any) {
    next({ err, req, res });
  }
})


route.get('/hi', (req: Request, res: Response, next: NextFunction) => {
  try {
    
  } catch (err: any) {
    next({err, req, res})
  }
})

route.post('/user', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { User } = DBmodels;
    const { username, age, isFemale } = req.body;
    if (!(username && age && [true,false].includes(isFemale))) return res.json({ error: true, msg: 'Please provide necessary details!' });
    
    const newRecord = await User.create({ username, age, isFemale })
    res.json(newRecord);
  } catch (err: any) {
    next({ err, req, res })
  }
})

route.get('/user', async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { User } = DBmodels;
    const { username, age, isFemale } = req.body;
    const users = await User.findAll({})
    res.json(users);
  } catch (err: any) {
    next({ err, req, res })
  }
})


export default route;