const { eBooksCollection } = require("../mongoDBConfig/collections");
const { createDoc, readDoc, updateDoc, deleteDoc } = require("../utils/mongoQuery");

const getEBookList = async (req, res) => {
    const result = await readDoc(eBooksCollection);
    res.send(result);
};

const saveEBookData = async (req, res) => {
    const result = await createDoc(req, eBooksCollection);
    res.send(result);
};

const updateEBookData= async(req, res)=>{
    const result = await updateDoc(req, eBooksCollection);
    res.send(result);
}

const deleteEBookData= async(req, res)=>{
    const result = await deleteDoc(req, eBooksCollection);
    res.send(result);
}

module.exports = {
    getEBookList,
    saveEBookData,
    updateEBookData,
    deleteEBookData
};
