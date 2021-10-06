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
}
