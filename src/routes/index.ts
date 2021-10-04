import { Express } from 'express';
import newsRouter from './news';
import siteRouter from './site';

export default function router(app: Express) {
  app.use('/news', newsRouter);

  app.use('/', siteRouter);
}
