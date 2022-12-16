const router = require("express").Router();
const Post = require("../models/post.model");


router.get("/posts", async (req,res)=>{
    const allPosts = await Post.find();
    res.json(allPosts);

});

router.post("/", async (req,res)=>{
  try {
    const post = await Post.create({
      title: req.body.title,
      about: req.body.about
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