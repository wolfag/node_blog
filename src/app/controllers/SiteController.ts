import { Request, Response } from 'express';

export default class SiteController {
  // [GET]: /
  index(req: Request, res: Response) {
    res.render('home')
  }

  // [GET]: /search
  search(req: Request, res: Response) {
    res.render('search')
  }
}

