const { getLiveOnlineSeminar, saveLiveOnlineSeminar } = require("../controllers/LiveOnlineSeminarController");

const liveOnlineSeminar = require("express").Router();

liveOnlineSeminar.get("/", getLiveOnlineSeminar);
liveOnlineSeminar.post("/", saveLiveOnlineSeminar)

module.exports = {
    liveOnlineSeminar
}