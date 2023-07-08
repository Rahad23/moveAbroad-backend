const express = require('express');
const router = express.Router();
const {  handleFileUpload, getBooks } = require("../controllers/MulterController");

const eBookMulter = require("express").Router();



eBookMulter.get('/', getBooks);
eBookMulter.post('/', handleFileUpload);

module.exports = {
    eBookMulter
}

