import { check, validationResult } from "express-validator";
import { json, Router } from "express";

const auth = require("../middleware/auth.middleware");
const Post = require("../models/Post");
const upload = require("../middleware/upload.middleware");

const router = Router();

router.post(
  "/newPost",
  auth,
  upload.single("banner"),
  [
    check("title", "Минимальная длина заголовка - 5 символов").isLength({
      min: 5,
    }),
    check("text", "Минимальная длина текста - 100 символов").isLength({
      min: 100,
    }),
  ],
  async (req, res) => {
    try {
      const { title, text, tag } = req.body;
      const file = req.file;
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Что-то пошло не так", errors: errors.array() });
      }

      if (file) {
        const post = new Post({
          banner: file.filename,
          title,
          text,
          tag,
          owner: req.user.userId,
        });

        post.save();
      } else {
        const post = new Post({
          title,
          text,
          tag,
          owner: req.user.userId,
        });

        await post.save();
      }

      res.status(201).json({ message: "Пост создан" });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так. Попробуйте снова" });
    }
  }
);

router.get("/", async (req, res) => {
  try {
    const limit = req.query.limit;
    const page = req.query.page;
    const posts = await Post.find()
      .limit(limit)
      .skip(limit * page);
    const total = await Post.countDocuments();

    res.json({ posts, total });
  } catch (err) {
    res.status(500).json({ message: "Не удалось загрузить статьи" });
  }
});

router.get("/userPosts", auth, async (req, res) => {
  try {
    const limit = req.query.limit;
    const page = req.query.page;
    const posts = await Post.find({ owner: req.user.userId })
      .limit(limit)
      .skip(limit * page);
    const total = await Post.countDocuments();

    res.json({ posts, total });
  } catch (err) {
    res.status(500).json({ message: "Не удалось загрузить статьи" });
  }
});

router.get("/postsByTag", async (req, res) => {
  try {
    const tag = req.query.tag;
    const posts = await Post.find({ tag: tag });

    res.json({ posts });
  } catch (err) {
    res.status(500).json({ message: "По этому тегу ничего не найдено" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    res.json(post);
  } catch (err) {
    res.status(500).json({ message: "Не удалось загрузить статью" });
  }
});

router.patch(
  "/:id",
  auth,
  upload.single("banner"),
  [
    check("title", "Минимальная длина заголовка - 5 символов").isLength({
      min: 5,
    }),
    check("text", "Минимальная длина текста - 100 символов").isLength({
      min: 100,
    }),
  ],
  async (req, res) => {
    try {
      const id = req.params.id;
      const {title, text, tag} = req.body;
      const file = req.file;

      await Post.updateOne(
        {
          _id: id
        },
        {
          banner: file && file.filename,
          title,
          text,
          tag
        }
      )

      res.json({message: "Изменения сохранены"});
    } catch (err) {
      res.status(500).json({ message: "Не удалось отредактировать статью" });
    }
  }
);

module.exports = router;
