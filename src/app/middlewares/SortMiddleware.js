module.exports = function (req, res, next) {
  res.locals._sort = {
    enabled: false,
    type: 'default',
  };

  if (req.query.hasOwnProperty('_sort')) {
    const { col, type } = req.query;

    Object.assign(res.locals._sort, {
      enabled: true,
      type,
      col,
    });
  }

  next();
};
