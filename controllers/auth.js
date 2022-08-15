const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken')
const User = require("../models/User");
const keys = require('../config/keys')

module.exports.login = function (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    // проверка пароля, пользователь существует
    const  passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if (passwordResult) {
      // генерация токенаб пароли совпали
      const token = jwt.sign({
        email:candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn:60 * 60})
      res.status(200).json({

      })
    } else { 
      // пароли не совпали
    }
  } else {
    // пользователя нет, ошибка
    res.status(404).json({message: "пользователь с таким именем не найден"})
  }

};

module.exports.register = async function (req, res) {
  const candidate = await URLSearchParams.findOne({
    // email password
    email: req.body.email,
  });
  if (candidate) {
    // если пользователь существут то выдаст ошибку
    res.status(409).json({
      message: "такой email уже занят.",
    });
  } else {
    // создаём нового пользователя
    const salt = bcrypt.genSaltSync(10);
    const password = req.body.password;

    const user = new User({
      email: req.body.email,
      password: bcrypt.hashSync(password, salt),
    });
    try {
      await user.save();
      res.status(201).json(user);
    } catch (error) {
      // обработать ошибку
    }
  }
};
