const mongoose = require("mongoose")

const ResultSchema = new mongoose.Schema({

    State:{ type: String , required: true},
    District:{ type: String , required: true},
    ImagePath:{ type: String , required: true},
    Data:{ type:Object, required:true }
})

module.exports = mongoose.model("Result", ResultSchema);
