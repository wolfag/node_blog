const morgan = require('morgan');
const path = require('path');
const { connect } = require('./config/db');
const router = require('./routes');
const methodOverride = require('method-override');

const handlebars = require('express-handlebars');
const dotenv = require('dotenv');
const express = require('express');

// Customs middleware
const SortMiddleware = require('./app/middlewares/SortMiddleware');

dotenv.config();

const PORT = parseInt(process.env.PORT, 10);
const DB_USER = process.env.DB_USER || '';
const DB_PASS = process.env.DB_PASS || '';

if (!PORT || !DB_PASS || !DB_USER) {
  process.exit(1);
}

connect({ user: DB_USER, password: DB_PASS });

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan('combined'));

app.use(methodOverride('_method'));

app.use(SortMiddleware);

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      sortable: (field, sort) => {
        const sortType = field === sort.col ? sort.type : 'default';

        const icons = {
          default: 'fas fa-sort',
          asc: 'fas fa-sort-up',
          desc: 'fas fa-sort-down',
        };
        const types = {
          default: 'desc',
          asc: 'desc',
          desc: 'asc',
        };

        return `<a href="?_sort&col=${field}&type=${types[sortType]}">
        <i class="${icons[sortType]}"></i>
      </a>`;
      },
    },
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

router(app);

app.listen(PORT, () => console.log(`-->sever start add ${PORT}`));
