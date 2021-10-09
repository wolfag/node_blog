const {
  mongooseToObject,
  multipleMongooseToObject,
} = require('../../utils/mongoose');
const Course = require('../models/Course');

class MeController {
  // [GET]: /me/courses
  async course(req, res, next) {
    const { col, type } = req.query;

    let coursesQuery = Course.find({});
    if (req.query.hasOwnProperty('_sort')) {
      coursesQuery.sort({
        [col]: type,
      });
    }

    Promise.all([coursesQuery, Course.countDeleted()])
      .then(([courses, deletedCount]) => {
        res.render('me/courses', {
          courses: multipleMongooseToObject(courses),
          deletedCount,
        });
      })
      .catch(next);
  }

  // [GET]: /me/courses/trash
  trash(req, res, next) {
    Course.findDeleted({})
      .then((courses) => {
        res.render('me/trash', {
          courses: multipleMongooseToObject(courses),
        });
      })
      .catch(next);
  }
}

module.exports = new MeController();
