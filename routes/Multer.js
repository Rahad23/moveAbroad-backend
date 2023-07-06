const express = require('express');
const router = express.Router();
const {  handleFileUpload } = require("../controllers/MulterController");

const eBookMulter = require("express").Router();

router.post('/', handleFileUpload);

module.exports = {
    eBookMulter
}

