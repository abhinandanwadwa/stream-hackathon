const router = require("express").Router();
const fetchuser = require('../middleware/fetchuser');
const Post = require("../models/post.model");
const { User } = require("../models/user.model");


router.get("/posts", fetchuser, async (req,res)=>{
    const allPosts = await Post.find();
    res.json(allPosts);

});

router.post("/", fetchuser, async (req, res) => {
  try {
    const theUser = await User.findById(req.user.id);

    const post = await Post.create({
      authorId: req.user.id,
      authorName: `${theUser.firstName} ${theUser.lastName}`,
      title: req.body.title,
      about: req.body.about,
    });

    if (post) {
      return res.status(200).json(post);
    }
    return res.status(500).json({ error: "Internal Server Error" });

  } catch (error) {
    console.error(error);
    return res.status(500).send("Internal Server Error");
  }

});

module.exports = router;