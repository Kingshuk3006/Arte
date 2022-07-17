import dbConnect from '../../../db/dbConnect';
import Article from '../../../models/Article';

dbConnect ();

export default async function (req, res) {
  const {method} = req;

  switch (method) {
    case 'GET':
      try {
        const articles = await Article.find ({});
        res.status (200).json ({success: true, articles: articles});
      } catch (error) {
        res.status (400).json ({success: false});
      }
      break;
    case 'POST':
      try {
        const article = await Article.create (req.body);
        res.status (200).json ({success: true, article: article});
      } catch (error) {
        res.status (400).json ({success: false});
      }
      break;
    default:
      res.status (400).json ({success: false});
  }
}
