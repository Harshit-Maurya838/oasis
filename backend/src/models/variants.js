const mongoose = require("mongoose");
const { Schema } = mongoose;

const variantSchema = new Schema({
    var_name:{
        type:String,
        required:true
    },
    var_gallery:{
        type:Array,
        required:true
    },
    var_color:{
        type:String,
        required:true
    },
    var_Stock:{
        type:Number,
        required:true
    },
})

const Variant = new mongoose.model("Variant", variantSchema);

module.exports = Variant;