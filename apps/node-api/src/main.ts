import express = require('express');
import bodyParser = require('body-parser');
import cors = require('cors')

//App
const app = express();
app.use(cors())
app.use(bodyParser.json());

//Routers
// eslint-disable-next-line @typescript-eslint/no-var-requires
app.use('/summary', require('./app/routers/bookings')); //Produces type error without the disabler


//Environment
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Node-api is listening on port ${PORT}`)
});

module.exports = app;
