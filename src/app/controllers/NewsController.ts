import { Request, Response } from 'express';

export default class NewsController {
  // [GET]: /news
  index(req: Request, res: Response) {
    res.render('news')
  }

  // [GET]: /news/slug
  detail(req: Request, res: Response) {
    res.send('detail')
  }
}

