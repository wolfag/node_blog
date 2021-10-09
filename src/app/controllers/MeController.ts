import { Request, Response, NextFunction } from 'express';
import {
  mongooseToObject,
  multipleMongooseToObject,
} from '../../utils/mongoose';
import Course from '../models/Course';

export default class MeController {
  // [GET]: /me/courses
  course(req: Request, res: Response, next: NextFunction) {
    Course.find({})
      .then((courses) => {
        res.render('me/course', { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }
}
