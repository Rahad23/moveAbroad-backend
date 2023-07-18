const { liveOnlineSeminarCollection } = require("../mongoDBConfig/collections");
const path = require('path');
const { createDoc, deleteDoc, updateDoc } = require("../utils/mongoQuery");
const { ObjectId } = require("mongodb");
const imageFolderPath = path.join(`${process.env.APP_IMG_URL}/Assets/UniversityImg`);



const { promisify } = require('util');
const sleep = promisify(setTimeout); // Add this to create a sleep function

// Server-side implementation (using MongoDB aggregation)
const getLiveOnlineSeminar = async (req, res) => {
  const liveSeminarData = await liveOnlineSeminarCollection().find({}).toArray();
  const liveSeminarAllData = liveSeminarData.map(data => ({
    ...data,
   imagePath: `${imageFolderPath}/${data?.universityImg}`,
 }));

    const result = await liveSeminarAllData;
    res.send(result);
  
};

const getOneLiveSeminarData= async(req, res)=>{
    const dataOneBook = await liveOnlineSeminarCollection().findOne({
      _id: new ObjectId(req.params.id)
  })
  const liveSeminarWithImagePaths = {
      ...dataOneBook,
      imagePath: `${imageFolderPath}`,
    };

  res.send({
      ...liveSeminarWithImagePaths,
  } || {})
}

const saveLiveOnlineSeminar = async (req, res) => {
    const result = await createDoc(req, liveOnlineSeminarCollection);
    res.send(result);
};

const updateLiveOnlineSeminar = async(req, res)=>{
  const result = await updateDoc(req, liveOnlineSeminarCollection);
  res.send(result);
}

const deleteLiveOnlineSeminar= async(req, res)=>{
  const result = await deleteDoc(req, liveOnlineSeminarCollection);
  res.send(result);
}


module.exports = {
    getLiveOnlineSeminar,
    getOneLiveSeminarData,
    saveLiveOnlineSeminar,
    updateLiveOnlineSeminar,
    deleteLiveOnlineSeminar
}