var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  let products = [
    {
      name : "SAMSUNG GALAXY A1",
      category : "Phone",
      discription : "A1 New Advanced Technologies added. 256mp camera.",
      image : "https://m.media-amazon.com/images/I/71i2XhHU3pL._SL1500_.jpg"
    },
    {
      name : "I PHONE 11",
      category : "Phone",
      discription : "Iphone 11 New Advanced Technologies added. 256mp camera.",
      image : "https://m.media-amazon.com/images/I/71DVgBTdyLL._SL1500_.jpg"
    },
    {
      name : "POCO F11",
      category : "Phone",
      discription : "F11 New Advanced Technologies added. 256mp camera.",
      image : "https://m.media-amazon.com/images/I/81-fNmQqlLL._AC_SL1500_.jpg"
    },
    {
      name : "OPP F3",
      category : "Phone",
      discription : "F3New Advanced Technologies added. 256mp camera.",
      image : "https://vlebazaar.in/image/cache/catalog//B074TZG666/OPPO-F3-4GB-Mobile-Phone-Rose-Gold-64GB-B074TZG666-1000x1000h.jpg"
    }
  ];
  res.render('admin/view-products',{admin:true,products});
});


router.get('/add-products',function(req,res){
  res.render('admin/add-products')

})

router.post('/add-products',(req,res)=>{
  console.log(req.body);
  console.log(req.files.Image);
})


module.exports = router;
