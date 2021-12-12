import Post from './Post.js';

class PostController {
  async create(req, res) {
    try {
      const {author, title, content, picture} = req.body;
      const post = await Post.create({author, title, content, picture});
      res.status(200).json(post);
      console.log(req.body);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getAll(req, res) {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getOne(req, res) {
    try {
      const {id} = req.params;
      // Эта проверка не сработала, там есть своя.
      if (!id) {
        res.status(400).json({message: 'Id is not found.'});
      }
      const post = await Post.findById(id);
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async update(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async delete(req, res) {
    try {
    } catch (e) {
      res.status(500).json(e);
    }
  }
}

export default new PostController();
