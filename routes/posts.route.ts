import { check, validationResult } from "express-validator";
import { json, Router } from "express";

const auth = require("../middleware/auth.middleware");
const Post = require("../models/Post");

const router = Router();

router.post(
  "/newPost",
  auth,
  [
    check("title", "Минимальная длина 5 символов").isLength({min: 5}),
    check("text", "Минимальная длина текста 100 символов").isLength({min: 100})
  ],
  async(req, res) => {
    try {
      const errors = validationResult(req);
      const {banner, title, text} = req.body;
  
      if(!errors.isEmpty()) {
        return res.status(400).json({message: "Что-то пошло не так", errors: errors.array()});
      }
  
      const post = new Post({banner, title, text, owner: req.user.userId});
  
      await post.save();
  
      res.status(201).json({message: "Пост создан"});
    } catch(err) {
      res.status(500).json({message: "Что-то пошло не так. Попробуйте снова"});
    }
  }
);

router.get(
  "/",
  async(_, res) => {
    try {
      const posts = await Post.find();

      res.json(posts);
    } catch(err) {
      res.status(500).json({message: "Не удалось загрузить статьи"});
    }
  }
);

router.get(
  "/userPosts", 
  auth, 
  async(req, res) => {
    try {
      const posts = await Post.find({owner: req.user.userId});

      res.json(posts);
    } catch(err) {
      res.status(500).json({message: "Не удалось загрузить статьи"});
    }
  }
);

router.get(
  "/:id",
  async(req, res) => {
    try {
      const post = await Post.findById(req.params);

      res.json(post);
    } catch(err) {
      res.status(500).json({message: "Не удалось загрузить статьи"});
    }
  }
);

module.exports = router;