const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    // image
});

const Post = mongoose.model("Post",postSchema);

module.exports = Post;