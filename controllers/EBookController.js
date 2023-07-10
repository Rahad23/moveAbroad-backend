const { ObjectId } = require("mongodb");
const { eBooksCollection } = require("../mongoDBConfig/collections");
const { createDoc, readDoc, updateDoc, deleteDoc, readOneDoc } = require("../utils/mongoQuery");
const fs = require('fs');
const path = require('path');
// image folder path
const imageFolderPath = path.join(`${process.env.APP_IMG_URL}/Assets/EBookImg`);
// console.log(imageFolderPath)
const getEBookList = async (req, res) => {
    const booksData = await eBooksCollection().find({}).toArray();
    const eBooksWithImagePaths = booksData.map(user => ({
        ...user,
        imagePath: `${imageFolderPath}/${user.imgFileName}`,
      }));

    const result = await eBooksWithImagePaths;
    res.send(result);
};

const getOneEBookData = async(req, res) =>{
    const dataOneBook = await eBooksCollection().findOne({
        _id: new ObjectId(req.params.id)
    })
    const eBooksWithImagePaths = {
        ...dataOneBook,
        imagePath: `${imageFolderPath}`,
      };

    res.send({
        ...eBooksWithImagePaths,
    } || {})
}

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
    deleteEBookData,
    getOneEBookData
};
