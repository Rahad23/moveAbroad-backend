const { adminCollections } = require("../mongoDBConfig/collections")
const { readDoc, createDoc } = require("../utils/mongoQuery");

const getAdmin= async (req, res)=>{
    const result = await readDoc(adminCollections);
    res.send(result);
}
const postAdmin= async(req, res)=>{
    const result = await createDoc(req, adminCollections);
    res.send(result);
}

module.exports={
    getAdmin,
    postAdmin
}