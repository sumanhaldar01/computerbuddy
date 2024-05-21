const mongoose = require('mongoose');
const csc = mongoose.Schema({
    topic: {
        type:String,
        required: false
    },
    content1: {
        type: String,
        required: false
    },
    content2: {
        type: String,
        required: false
    },
    content3: {
        type: String,
        required: false
    },
    content4: {
        type: String,
        required: false
    },
    image: {
        type: String,
        required: false
    }
});
module.exports=mongoose.model("C",csc);