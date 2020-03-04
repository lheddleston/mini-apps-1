const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

app.use(express.static('client'));

const getEntry = (request, response) => {
  console.log('Got a POST request');
  respose.send(request);
};

const createEntry = (request, response) => {
  if (error) { throw error; }
  response.status(200);
  console.log('Got a POST request');
  respose.send(request);
};

router.get('/', getEntry);

router.post('/upload_json', createEntry);

app.use('/', router);

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});



