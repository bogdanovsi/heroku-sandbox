const express = require('express');
const router = express.Router();
const MongooseCore = require('./mongoose-core');

const { Book } = require('../models');

const possibleKeys = [
    "_id",
    "book_chiper",
    "name",
    "circulation",
    "publication_date",
    "cost_price",
    "selling_price",
    "fee"
];

MongooseCore.bindDefaultDeleteAll(router, '/all', Book);
MongooseCore.bindDefaultCreateModel(router, '/', Book);
MongooseCore.bindDefaultDeleteByKeys(router, '/', Book, possibleKeys);
MongooseCore.bindUpdateModel(router, Book);

router.get('/all', async (req, res) => {
    await Book.aggregate([
        {
            $lookup: {
                from: "writers",
                localField: 'writer',
                foreignField: "_id",
                as: "writer"
            }
        }
    ]).exec().then((result) => {
        res.send(result);
    }).catch((err) => {
        console.log(err);
    });
})

router.get('/:name', async function(req, res) {
    res.send(await Book.findOneBook(req.params.name));
})

module.exports = router;