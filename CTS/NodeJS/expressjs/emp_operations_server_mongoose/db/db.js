const mongoose = require('mongoose');
const db_config = require('../config/db');

mongoose.connect(db_config.dev_db_url)
    .then((res)=>console.log("DB is connected successfull"))
    .catch((err) => console.log("Error while connecting DB."))

    
exports = mongoose;    