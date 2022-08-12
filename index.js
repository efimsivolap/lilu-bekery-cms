// запускаю простой сервер. index.js щтвечает только за запуск сервера
const app = require("./app");
// переменная для порта
const port = process.env.PORT || 5000;
app.listen(5000, () => console.log(`server has been started  on ${port}`));
