import { check, validationResult } from "express-validator";
import { Router } from "express";

const auth = require("../middleware/auth.middleware");
const Post = require("../models/Post");
const upload = require("../middleware/upload.middleware");

const router = Router();

router.post(
  "/newPost",
  auth,
  upload.single("banner"),
  async (req, res) => {
    try {
      const { title, text } = req.body;
      const file = req.file;

      if(file) {
        const post = new Post({
          banner: file.path,
          title,
          text,
          owner: req.user.userId,
        });
      }

      const post = new Post({
        title,
        text,
        owner: req.user.userId,
      });

      await post.save();

      res.status(201).json({ message: "Пост создан" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так. Попробуйте снова" });
    }
  }
);

router.get("/", async (_, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Не удалось загрузить статьи" });
  }
});

router.get("/userPosts", auth, async (req, res) => {
  try {
    const posts = await Post.find();

    res.json(posts);
  } catch (err) {
    res.status(500).json({ message: "Не удалось загрузить статьи" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params);

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Не удалось загрузить статьи" });
  }
});

module.exports = router;
