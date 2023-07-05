const { getEBookList, saveEBookData, updateEBookData, deleteEBookData } = require("../controllers/EBookController");

const eBooksRouter = require("express").Router();

eBooksRouter.get("/", getEBookList);
eBooksRouter.post("/", saveEBookData);
eBooksRouter.patch("/:id", updateEBookData);
eBooksRouter.delete("/:id", deleteEBookData)

module.exports={
    eBooksRouter
};