

const eBooksRouter = require("express").Router();

eBooksRouter.get("/", getEBookList);
eBooksRouter.post("/", getEBookList);

module.exports = eBooksRouter;