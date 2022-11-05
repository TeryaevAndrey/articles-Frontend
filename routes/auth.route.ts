import { Router } from "express";
import { body, validationResult, check } from "express-validator";

const User = require("../models/User");
const bcrypt = require("bcryptjs");
const config = require("config");
const jwt = require("jsonwebtoken");

const router = Router();

router.post(
  "/reg",
  [
    check("name", "Минимальная длина имени 5 символов").isLength({ min: 5 }),
    check("email", "Введите корректный email").isEmail(),
    check("password", "Минимальная длина пароля 8 символов")
      .isLength({
        min: 8,
      })
      .custom((value: string, { req }) => {
        if (value !== req.body.passwordRepeat) {
          throw new Error("Пароли не совпадают");
        } else {
          return value;
        }
      }),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      const { name, email, password } = req.body;

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({ message: "Что-то пошло не так", errors: errors.array() });
      }

      const candidate = await User.findOne({ email });

      if (candidate) {
        return res
          .status(400)
          .json({ message: "Такой пользователь уже существует." });
      }

      const hashedPassword = await bcrypt.hash(password, 12);
      const user = new User({ name, email, password: hashedPassword });

      await user.save();

      res.status(201).json({ message: "Пользователь создан" });
    } catch (err) {
      return res
        .status(500)
        .json({ message: "Что-то пошло не так. Попробуйте снова." });
    }
  }
);

router.post(
  "/login",
  [
    check("name", "Неверное имя").isLength({ min: 5 }),
    check("password", "Введите пароль").exists(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        return res
          .status(400)
          .json({
            message: "Некорректные данные при входе.",
            errors: errors.array(),
          });
      }

      const { name, password } = req.body;

      const user = await User.findOne({ name });

      if (!user) {
        return res.status(400).json({ message: "Пользователь не найден" });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ message: "Неверный пароль" });
      }

      const secretKey = config.get("secretKey");

      const token = jwt.sign({ userId: user.id }, secretKey, {
        expiresIn: "1h",
      });

      res.json({
        message: "Успешно!",
        token,
        userId: user.id,
        name: user.name,
      });
    } catch (err) {
      res
        .status(500)
        .json({ message: "Что-то пошло не так, попробуйте снова" });
    }
  }
);

module.exports = router;
