const { getEBookList, saveEBookData, updateEBookData, deleteEBookData, getOneEBookData } = require("../controllers/EBookController");

const eBooksRouter = require("express").Router();

eBooksRouter.get("/", getEBookList);
eBooksRouter.get('/:id', getOneEBookData);
eBooksRouter.post("/", saveEBookData);
eBooksRouter.patch("/:id", updateEBookData);
eBooksRouter.delete("/:id", deleteEBookData)

module.exports={
    eBooksRouter
};