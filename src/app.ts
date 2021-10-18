import express, {Request, Response} from 'express';
import path from 'path';



// __________app settings
const app = express();
app.use('/static/', express.static(path.join(__dirname, '../client')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// __________routes
import routes from './routes';
app.use('/', routes);
app.use('*', (req, res) => {
  res.json({ msg: 'No such API'})
})


// __________error handling
app.use((errObj: { err: any, req: Request, res: Response }) => {
  const { err, req, res }  = errObj;
  console.log('ERROR*****************')
  console.log(err);
  res.json({ error: true, msg: err.message || `Server Error!` }).status(500);
})

const PORT = process.env.PORT || process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${ PORT }`)
})