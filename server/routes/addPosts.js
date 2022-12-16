const router = require("express").Router();
const {Post} = require("../models/post.model");


router.get("/posts",(req,res)=>{
    Post.find((err,posts)=>{
        if(err){
            console.log(err);
        }
        else{
            res.render("/posts",{posts:posts});
        }
    })

});

router.post("/addPosts",(req,res)=>{
  const post = new Post({
    title:req.body.title,
    about:req.body.about
  });

  post.save((err)=>{
    if(err){
      console.log(err);
    }
    else{
        res.redirect("/posts");
    }
  });

});

module.exports = router;