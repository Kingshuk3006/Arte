import dbConnect from '../../../db/dbConnect';
import Article from '../../../models/Article';

dbConnect ();

export default async function (req, res) {
  const {
    method,
    query: {id}, //the name as the file name
  } = req;

  switch (method) {
    case 'GET':
      try {
        const article = await Article.findById (id);
        if (!article) {
          res.status (400).json ({success: false});
        }
        res.status (200).json ({success: true, article});
      } catch (error) {
        res.status (400).json ({success: false});
      }
      break;
    case 'PUT':
      try {
        const article = await Article.findByIdAndUpdate (id, req.body, {
          new: true,
          runValidators: true,
        });
        if (!article) {
          res.status (400).json ({success: false});
        }
        res.status (200).json ({success: true, article});
      } catch (error) {
        res.status (400).json ({success: false});
      }
      break;
    case 'DELETE':
      try {
        const article = await Article.deleteOne ({_id: id});
        if (!article) {
          res.status (400).json ({success: false});
        }
        res.status (200).json ({success: true, article});
      } catch (error) {
        res.status (400).json ({success: false});
      }
      break;
    default:
      res.status (400).json ({success: false});
  }
}
