const { eBooksCollection } = require("../mongoDBConfig/collections");
const { createDoc, readDoc, updateDoc, deleteDoc } = require("../utils/mongoQuery");
const fs = require('fs');
const path = require('path');
// image folder path
const imageFolderPath= "../Assets/EBookImg";

const getEBookList = async (req, res) => {
    fs.readdir(imageFolderPath, (err, files) => {
        if (err) {
            console.error('Error reading folder:', err);
            return res.status(500).send('Error reading folder');
        }
        
        const imageArray = files.map(file => {
            return path.join(imageFolderPath, file);
        });
        
        const ImageList = imageArray;
        ImageList.map(imgData=>{
            const imgName = imgData.split("\\")[3];
            console.log(imgName)
        })
    });
    
    
    const result = await readDoc(eBooksCollection)
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
