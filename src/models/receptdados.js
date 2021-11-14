const mongoose = require('mongoose');

const ReceptSchema = new mongoose.Schema({
    name :{
        type: String,
        require: true,

    },

    insertedAt: {
        type: Date,
        default: Date.now,
    }

})