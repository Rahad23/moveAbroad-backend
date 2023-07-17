const { getLiveOnlineSeminar, saveLiveOnlineSeminar, deleteLiveOnlineSeminar, updateLiveOnlineSeminar, getOneLiveSeminarData } = require("../controllers/LiveOnlineSeminarController");

const liveOnlineSeminar = require("express").Router();

liveOnlineSeminar.get("/", getLiveOnlineSeminar);
liveOnlineSeminar.get("/:id", getOneLiveSeminarData)
liveOnlineSeminar.post("/", saveLiveOnlineSeminar);
liveOnlineSeminar.patch('/:id', updateLiveOnlineSeminar)
liveOnlineSeminar.delete("/:id", deleteLiveOnlineSeminar)

module.exports = {
    liveOnlineSeminar
}