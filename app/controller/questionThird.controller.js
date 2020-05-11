const Product = require('../models/Product');
const productDetails = require('../models/Product _Details');
const category = require('../models/Category')

// Create and Save a new Product
exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
        return res.status(400).send({
            message: "Product title can not be empty"
        });
    }

    // Create a Product
    const product = new Product({
        title: req.body.title || "Untitled Note",
        category: req.body.category,
        subcategory: req.body.subcategory,
        description: req.body.description
    });

    // Save Product in the database
    product.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the Note."
            });
        });
};

// Find a single Product 
exports.findOne = (req, res) => {
    Product.findOne({ title: req.body.title })
        .then(product => {
            if (!product) {
                return res.status(404).send({
                    message: "Product not found with title " + req.body.title
                });
            }
            res.send(product);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.body.title
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.body.noteId
            });
        });
};
