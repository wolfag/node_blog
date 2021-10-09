import { Express } from 'express';
import newsRouter from './news';
import siteRouter from './site';
import coursesRouter from './courses';
import meRoutes from './me';

export default function router(app: Express) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRoutes);

  app.use('/', siteRouter);
}
