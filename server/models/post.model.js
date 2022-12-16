const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    authorId: {
        type: String,
        required: true
    },
    authorName: {
        type: String,
        required: true
    },
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