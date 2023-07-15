const express = require('express');
const { getLiveSeminar, handleFileUpload } = require('../controllers/LiveOnliveSeminarMulterController');
const router = express.Router();

const liveSeminarMulter = require("express").Router();



liveSeminarMulter.get('/', getLiveSeminar);
liveSeminarMulter.post('/', handleFileUpload);

module.exports = {
    liveSeminarMulter
}
