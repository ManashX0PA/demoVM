import express from 'express';
import path from 'path';



// __________app settings
const app = express();
app.use('/static/', express.static(path.join(__dirname, '../client')))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



// __________routes
import routes from './routes';
app.use('/', routes);


const PORT = process.env.PORT || process.env.port || 5000;
app.listen(PORT, () => {
  console.log(`Server listening on PORT ${ PORT }`)
})