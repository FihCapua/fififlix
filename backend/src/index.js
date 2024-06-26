const express = require('express');

const routes = require('./routes');
const cors = require('./app/middlewares/cors');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);

app.listen(3000, () => {
  console.log('server running on port 3000');
});
