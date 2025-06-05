const mongoose = require('mongoose');

const CONNECT_DB = (url) => {
    return mongoose.connect(url);    
};
module.exports = CONNECT_DB;