const mongoose = require('mongoose');

const ReceptSchema = new mongoose.Schema({
    values :{
        type: String,
        require: true,
    },

    username: {
        type: String,
        require: true,
    },

    insertedAt: {
        type: Date,
        default: Date.now,
    }

});

const SaveDataBase = mongoose.model('SaveDataBase', ReceptSchema);

module.exports = SaveDataBase;