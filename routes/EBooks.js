const { getEBookList, saveEBookData } = require("../controllers/EBookController");

const eBooksRouter = require("express").Router();

eBooksRouter.get("/", getEBookList);
eBooksRouter.post("/", saveEBookData);

module.exports={
    eBooksRouter
};