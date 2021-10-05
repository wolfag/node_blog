import { Request, Response, NextFunction } from 'express';
import { multipleMongooseToObject } from '../../utils/mongoose';
import Course from '../models/Course';

export default class SiteController {
  // [GET]: /
  index(req: Request, res: Response, next: NextFunction) {
    Course.find({})
      .then((courses) => {
        res.render('home', { courses: multipleMongooseToObject(courses) });
      })
      .catch(next);
  }

  // [GET]: /search
  search(req: Request, res: Response) {
    res.render('search');
  }
}
