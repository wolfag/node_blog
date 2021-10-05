import { Express } from 'express';
import newsRouter from './news';
import siteRouter from './site';
import coursesRouter from './courses';

export default function router(app: Express) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);

  app.use('/', siteRouter);
}
