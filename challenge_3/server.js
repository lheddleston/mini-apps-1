const express = require('express');
const app = express();
const router = express.Router();
const port = 3000;

// CLIENT
app.use(express.static('public'));

// CONTROLLERS
const fetchData = (request, response) => {
  console.log('Received a GET request');
  response.status(200);
  response.json();
}
const postData = (request, response) => {
  console.log('Receieved a POST request');
  response.status(200);
  response.json();
}

// ROUTES
router.get('/', fetchData);
router.post('/', postData);

// START
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
