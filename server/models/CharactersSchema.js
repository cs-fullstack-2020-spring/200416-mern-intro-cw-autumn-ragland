// import Schema class
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// create character model
let CharactersSchema = new Schema(
    {
        name : String,
        gender : String,
        age : Number,
    }
);

// export character model
module.exports = mongoose.model('characters200416', CharactersSchema)