import { eBooksCollection } from "../mongoDBConfig/collections";
import { createDoc, readDoc } from "../utils/mongoQuery";


const getEBookList = async (req, res) => {
    const result = await readDoc(eBooksCollection);
    res.send(result)
}

const saveEBookData = async (req, res) => {
    const result = await createDoc(req, eBooksCollection)

    res.send(result)
}

module.export = {
    getEBookList,
    saveEBookData
}