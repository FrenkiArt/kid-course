import Router from 'express';
import Post from './Post.js';

const router = new Router();

router.post('/posts', async (req, res) => {
  try {
    const {author, title, content, picture} = req.body;
    const post = await Post.create({author, title, content, picture});
    res.status(200).json(post);
    console.log(req.body);
  } catch (e) {
    console.log(e);
    res.status(500).json(e);
  }
});

router.get('/posts');

router.get('/posts/:id');

router.put('/posts');

router.delete('/posts/:id');

export default router;
