const { usersCollection } = require("../mongoDBConfig/collections");
const { readDoc, createDoc } = require("../utils/mongoQuery");

const getUsers = async (req, res) => {
    const {email} = req.query;
    const result = await usersCollection().findOne({email});
    if(result){
        res.send(result);
    }else{
        res.status(400).send("User Not found");
    }
};
const postUsers = async (req, res) => {
    const {email} = req.body;
    const userEmail = await  usersCollection().findOne({email});
    if(!userEmail){
        const result = await createDoc(req, usersCollection);
        res.send(result);
    }else{
        res.status(400).send("This email has been taken");
    }
    
};

module.exports={
    getUsers,
    postUsers
}