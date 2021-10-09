const {
  mongooseToObject,
  multipleMongooseToObject,
} = require('../../utils/mongoose');
const Course = require('../models/Course');

class CourseController {
  // [GET]: /courses/:slug
  detail(req, res, next) {
    const { slug } = req.params;

    Course.findOne({ slug })
      .then((course) =>
        res.render('courses/detail', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  // [GET]: /courses/create
  create(req, res, next) {
    res.render('courses/create');
  }

  // [POST]: /courses/create
  store(req, res, next) {
    const { name, description, level, videoId } = req.body;

    Course.create({
      name,
      description,
      level,
      videoId,
    })
      .then((course) => {
        res.redirect(`/me/courses`);
      })
      .catch(next);
  }

  edit(req, res, next) {
    const { id } = req.params;

    Course.findOne({ _id: id })
      .then((course) =>
        res.render('courses/edit', { course: mongooseToObject(course) }),
      )
      .catch(next);
  }

  // [PUT]: /courses/:id
  update(req, res, next) {
    const { id } = req.params;
    const { name, description, level, videoId } = req.body;

    Course.updateOne(
      { _id: id },
      {
        name,
        description,
        level,
        videoId,
      },
    )
      .then(() => {
        res.redirect(`/me/courses`);
      })
      .catch(next);
  }

  // [DELETE]: /course/:id
  delete(req, res, next) {
    const { id } = req.params;

    Course.delete({ _id: id })
      .then(() => {
        res.redirect(`back`);
      })
      .catch(next);
  }

  // [DELETE]: /course/:id/force
  forceDelete(req, res, next) {
    const { id } = req.params;

    Course.deleteOne({ _id: id })
      .then(() => {
        res.redirect(`back`);
      })
      .catch(next);
  }

  // [PATCH]: /course/:id/restore
  restore(req, res, next) {
    const { id } = req.params;

    Course.restore({ _id: id })
      .then(() => {
        res.redirect('back');
      })
      .catch(next);
  }
}

module.exports = new CourseController();
