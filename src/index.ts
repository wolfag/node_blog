import * as dotenv from 'dotenv';
import express from 'express';
import handlebars from 'express-handlebars';
import morgan from 'morgan';
import path from 'path';
import { connect } from './config/db';
import router from './routes';

dotenv.config();

const PORT: number = parseInt(process.env.PORT as string, 10);
const DB_USER: string = process.env.DB_USER || '';
const DB_PASS: string = process.env.DB_PASS || '';

if (!PORT || !DB_PASS || !DB_USER) {
  process.exit(1);
}

connect({ user: DB_USER, password: DB_PASS });

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
