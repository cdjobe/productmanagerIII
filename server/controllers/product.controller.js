const { Product } = require('../models/product.model');

module.exports.index = ( request, response ) => {
    response.json({
        message: "Hello"
    });
}

module.exports.createProduct = ( request, response ) => {
    const { Title, Price, Description } = request.body;
    Product.create({
        Title,
        Price,
        Description
    })
        .then(product => response.json( product ))
        .catch(err => response.json( err ));
}

module.exports.showAll = ( request, response ) => {
    Product.find()
        .then(allProducts => response.json({ products: allProducts }))
        .catch(err => response.json({message: "Something is wrong ", error: err }));
}

module.exports.getProduct = ( request, response ) => {
    Product.find({ _id:request.params.id})
    .then(product => response.json(product))
    .catch(err => response.json(err))
}

module.exports.deleteProduct = ( request, response ) => {
    Product.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}

module.exports.updateProduct = ( request, response) => {
    Product.findOneAndUpdate({ _id: request.params.id}, req.body, { new: true })
    .then(updatedProduct => response.json({ product: updatedProduct }))
    .catch(err => response.json({ message: "Something went wrong", error: err}));
};