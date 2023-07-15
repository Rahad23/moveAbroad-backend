const { liveOnlineSeminarCollection } = require("../mongoDBConfig/collections");
const path = require('path');
const { createDoc } = require("../utils/mongoQuery");
const imageFolderPath = path.join(`${process.env.APP_IMG_URL}/Assets/UniversityImg`);

const getLiveOnlineSeminar = async (req, res) => {
    const booksData = await liveOnlineSeminarCollection().find({}).toArray();
    const eBooksWithImagePaths = booksData.map(liveSeminarData => ({
        ...liveSeminarData,
        imagePath: `${imageFolderPath}/${liveSeminarData.universityImg}`,
      }));

    const result = await eBooksWithImagePaths;
    res.send(result);
};

const saveLiveOnlineSeminar = async (req, res) => {
    const result = await createDoc(req, liveOnlineSeminarCollection);
    res.send(result);
};


module.exports = {
    getLiveOnlineSeminar,
    saveLiveOnlineSeminar
}