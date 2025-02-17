const mongoose =  require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;