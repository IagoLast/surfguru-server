const app = require('express')();
const api = require('./src/api.js');

const cache = require('./src/cache.js');

const cors = require('cors')
const PORT = process.env.PORT || 8080;

app.set('json spaces', 2);
app.use(cors())
app.use('/api/v1/', cache);
app.use('/api/v1/', api);

app.listen(PORT);

console.log('Listening on: ' + PORT);
