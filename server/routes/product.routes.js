const ProductController = require('../controllers/product.controller');

module.exports = function(app) {
    app.get('/api', ProductController.index);
    app.post('/api/product', ProductController.createProduct);
    app.get('/api/all', ProductController.showAll);
    app.get('/api/product/:id', ProductController.getProduct);
    app.delete('/api/product/delete/:id', ProductController.deleteProduct);
    app.put('/api/product/update/:id', ProductController.updateProduct);
}