import { Request, Response, NextFunction } from 'express';
import {
  mongooseToObject,
  multipleMongooseToObject,
} from '../../utils/mongoose';
import Course from '../models/Course';

export default class CourseController {
  // [GET]: /courses/:slug
  detail(req: Request, res: Response, next: NextFunction) {
    const { slug } = req.params;

    Course.findOne({ slug })
      .then((course) =>
        res.render('courses/detail', { course: mongooseToObject(course!) }),
      )
      .catch(next);
  }

  // [GET]: /courses/create
  create(req: Request, res: Response, next: NextFunction) {
    res.render('courses/create');
  }

  // [POST]: /courses/create
  store(req: Request, res: Response, next: NextFunction) {
    const { name, description, level, videoId } = req.body;

    Course.create({
      name,
      description,
      level,
      videoId,
    })
      .then((course) => {
        res.redirect(`/courses/${course.slug}`);
      })
      .catch(next);
  }

  edit(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    Course.findOne({ _id: id })
      .then((course) =>
        res.render('courses/edit', { course: mongooseToObject(course!) }),
      )
      .catch(next);
  }

  // [PUT]: /courses/:id
  update(req: Request, res: Response, next: NextFunction) {
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
  delete(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;

    Course.deleteOne({ _id: id })
      .then(() => {
        res.redirect(`back`);
        // res.redirect(`/me/courses`);
      })
      .catch(next);
  }
}
