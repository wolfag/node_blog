const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRoutes = require('./me');

function router(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRoutes);

  app.use('/', siteRouter);
}

module.exports = router;
