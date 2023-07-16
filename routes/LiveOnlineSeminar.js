const { getLiveOnlineSeminar, saveLiveOnlineSeminar, deleteLiveOnlineSeminar } = require("../controllers/LiveOnlineSeminarController");

const liveOnlineSeminar = require("express").Router();

liveOnlineSeminar.get("/", getLiveOnlineSeminar);
liveOnlineSeminar.post("/", saveLiveOnlineSeminar);
liveOnlineSeminar.delete("/:id", deleteLiveOnlineSeminar)

module.exports = {
    liveOnlineSeminar
}