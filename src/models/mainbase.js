const mongoose = require('mongoose');

const ReceptSchema = new mongoose.Schema({
    valor :{
        type: Integer,
        require: true,
    },

    insertedAt: {
        type: Date,
        default: Date.now,
    }

})