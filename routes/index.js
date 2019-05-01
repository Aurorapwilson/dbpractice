const listController = require('../controllers/list');
//welcome route
module.exports = (app) => {

app.get('/api', (req, res) => res.status(200).send({
    message: 'Welcome to the Todos API!',
}));

// company create routes for creating new record
app.post('/api/list/create', listController.create)
app.get('/api/list', listController.getAll);
app.get('/api/list/:listId', listController.retrieve);
app.put('/api/list/:listId', listController.update);
app.delete('/api/list/:listId', listController.destroy);
};
