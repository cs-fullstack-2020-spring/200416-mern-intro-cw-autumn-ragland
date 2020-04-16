// create server
let express = require('express');
let app = express();
// port variable
let port = 5000

// import router module
let api = require('./routes/api');
// mount routes
app.use('/api', api);

// server listening on port
app.listen(port, () => {
    console.log(`Listening on ${port}`)
});