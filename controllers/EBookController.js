const { eBooksCollection } = require("../mongoDBConfig/collections");
const { createDoc, readDoc } = require("../utils/mongoQuery");

const getEBookList = async (req, res) => {
    const result = await readDoc(eBooksCollection);
    res.send(result);
};

const saveEBookData = async (req, res) => {
    const result = await createDoc(req, eBooksCollection);
    res.send(result);
};

module.exports = {
    getEBookList,
    saveEBookData
};
