import * as dotenv from 'dotenv';
import express from 'express';
import handlebars from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import router from './routes';

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}
const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('combined'));

app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

router(app);

app.listen(PORT, () => console.log(`-->sever start add ${PORT}`));
