// create router
let express = require('express');
let router = express.Router();

// read all documents
router.get('/', (req,res) => {
    res.send("GET TEST");
})

// create a document
router.post('/', (req,res) => {
    res.send("POST TEST")
})

// export modules
module.exports = router;