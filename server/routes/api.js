// create router
let express = require('express');
let router = express.Router();
router.use(express.json());

let CharacterCollection = require('../models/CharactersSchema');

// read all documents
router.get('/', (req,res) => {
    // res.send("GET TEST");
    CharacterCollection.find({}, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

// create a document
router.post('/', (req,res) => {
    // res.send("POST TEST")
    CharacterCollection.create(req.body, (errors, results) => {
        errors ? res.send(errors) : res.send(results);
    })
})

// export modules
module.exports = router;