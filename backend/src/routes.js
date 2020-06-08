const express = require('express');
const OngController = require('./controllers/ong_controller')
const IncidentController = require('./controllers/incident_controller')
const SessiontController = require('./controllers/session_controller')

const routes = express.Router();

routes.post('/session', SessiontController.create)

routes.post('/ongs' , OngController.create);
routes.get('/ongs', OngController.list);
routes.get('/specificlists', OngController.specific_lists);

routes.post('/incidents' , IncidentController.create);
routes.get('/incidents' , IncidentController.list);
routes.delete('/incidents/:id', IncidentController.delete);


module.exports = routes;