import express from 'express';
import bodyParser from 'body-parser';
import contactRoutes from './routes/api/contact';

let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/contacts', contactRoutes)

app.listen(3300, () => {
  console.log('Contact app listening on port 3300!');
});
