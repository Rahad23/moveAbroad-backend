const { usersCollection } = require("../mongoDBConfig/collections");
const { readDoc, createDoc } = require("../utils/mongoQuery");
const bcrypt = require('bcrypt');
const getUsers = async (req, res) => {
    const {email, password} = req.query;
    const result = await usersCollection().findOne({email});
    if(result){
        bcrypt.compare(password, result?.password, (err, isMatch) => {
            if (err) {
              // Handle the error
            } else if (isMatch) {
                res.send(
                    {
                        ...result,
                        isMatch
                    }
                    )
            } else {
                res.send(
                    {
                        ...result,
                        isMatch
                    }
                    )
            }
          });
    }else{
        res.status(400).send("User Not found");
    }
    
    
};
const postUsers = async (req, res) => {
    const saltRounds = 10;
    const {email, password, fullName} = req.body;
    bcrypt.hash(password, saltRounds, async(err, hash) => {
        if (err) {
            res.status(400).send("error");
        } else {
            const userEmail = await  usersCollection().findOne({email});
            if(!userEmail){
                const result = await usersCollection().insertOne({
                    email,
                    password: hash,
                    fullName
                });
                res.send(result);
            }else{
                res.status(400).send("This email has been taken");
            }
        }
      });
    
};

module.exports={
    getUsers,
    postUsers
}