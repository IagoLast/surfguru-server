const app = require('express')();
const api = require('./src/api.js');
const cors = require('cors')
const PORT = process.env.PORT || 8080;
const apicache = require('apicache');

app.use(apicache.middleware('4 hour'))
app.use(cors());
app.set('json spaces', 2);

app.get('/api/v1/simple/:id', api);

app.listen(PORT);

console.log('Listening on: ' + PORT);
