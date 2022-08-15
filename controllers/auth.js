module.exports.login = function (req, res) {
  res.status(200).json({
    login: {
      email: req.body.email,
      password: req.body.password,
    },
  });
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
  }
};
