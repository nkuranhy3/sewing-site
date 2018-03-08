var express = require("express");
var router = express.Router();
var Product = require("./productSchema");

router.get("/", function(req, res) {
  res.redirect("/products");
});

/* index route*/

router.get("/products", function(req, res) {
  Product.find({}, function(err, products) {
    if (err) {
      console.log("ERROR!");
    }
    else {
      res.render("index", { products: products });
    }
  });
});

/*new route */
router.get("/products/new", function(req, res) {
  res.render("new");
});

/*create route */
router.post("/products", function(req, res) {
  Product.create(req.body.product, function(err, newproduct) {
    if (err) {
      res.render("new");
    }
    else {
      //then, redirect to the index
      res.redirect("/products");
    }
  });
});


// SHOW -
router.get("/products/:id", function(req, res) {
  Product.findById(req.params.id, function(err, foundProduct) {
    if (err) {
      console.log(err);
    }
    else {
      res.render("show", { product: foundProduct });
    }
  });
})
// EDIT ROUTE
router.get("/products/:id/edit", function(req, res) {
  Product.findById(req.params.id, function(err, foundProduct) {
    if (err) {
      res.redirect("/products");
    }
    else {
      res.render("edit", { product: foundProduct });
    }
  });
})


// UPDATE ROUTE
router.put("/products/:id", function(req, res) {
  Product.findByIdAndUpdate(req.params.id, req.body.product, function(err, updatedProduct) {
    if (err) {
      res.redirect("/products");
    }
    else {
      res.redirect("/products/" + req.params.id);
    }
  });
});

// DELETE ROUTE
router.delete("/products/:id", function(req, res) {
  Product.findByIdAndRemove(req.params.id, function(err) {
    if (err) {
      res.redirect("/products");
    }
    else {
      res.redirect("/products");
    }
  })
  //redirect somewhere
});

module.exports = router;
