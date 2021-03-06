const  routes  = require('express').Router();
const envioEmailControllers = require('./controllers/envioEmail');
const usuarios = require('./controllers/usuarios');
const campanha = require('./controllers/campanha');
const perguntas = require('./controllers/perguntas');
const jogo = require("./controllers/jogo");


routes.get('/', (request, response) => { return response.json('Funcionando') });

routes.post ('/sendEmail', envioEmailControllers.envio);
routes.get ('/usuarios', usuarios.all);
routes.get('/campanhas', campanha.all);
routes.get('/perguntas', perguntas.all);

routes.post ('/criarUsuario', usuarios.create);
routes.post('/criarcampanha', campanha.create);
routes.post('/criarPergunta', perguntas.create);

routes.post('/enviopergunta', jogo.envioPergunta);
routes.post('/conferePergunta', jogo.conferePergunta);

module.exports = routes;