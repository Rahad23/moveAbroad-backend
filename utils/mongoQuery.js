const { ObjectId } = require("mongodb")

// query to create a mongodb document
const createDoc = (req, collection) => collection().insertOne(req.body)

// query to read all mongodb documents
const readDoc = (collection) => collection().find({}).toArray()

// query to update a mongodb document
const updateDoc = (req, collection) => collection().updateOne(
    {
        _id: new ObjectId(req.params.id)
    },
    {
        $set: req.body
    }
)

// query to delete a mongodb document
const deleteDoc = (req, collection) => collection().deleteOne({
    _id: new ObjectId(req.params.id)
})

// query to delete a mongodb document
const readOneDoc = (req, collection) => collection().findOne({
    _id: new ObjectId(req.params.id)
})


module.exports = {
    createDoc,
    readDoc,
    updateDoc,
    deleteDoc,
    readOneDoc,
}