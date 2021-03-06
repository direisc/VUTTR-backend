const express = require('express');
const routes = express.Router();

const ToolController = require('./controllers/ToolController');

routes.post('/tools', ToolController.store);
routes.get('/tools', ToolController.find);
routes.delete('/tools/:id', ToolController.remove);

routes.get('/', (req, res) => {
	return res.send('Sai daqui rapaz!');
});

module.exports = routes;