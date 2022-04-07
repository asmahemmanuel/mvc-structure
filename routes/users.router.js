const { Router } = require("express");
const { login, register } = require("./controllers/users.controller")

const usersRouter = Router();

usersRouter.get("/login", login);

usersRouter.get("/Register", register);



module.exports = usersRouter;