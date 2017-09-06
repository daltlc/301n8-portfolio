const express = require('express');
const app = express();
const requestProxy = require('express-request-proxy');
const opn = require('opn'); //for opening in browser
// const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 4000;

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.use(express.static('public'));

app.get('/github/*', proxyGitHub);

app.get('/*', function(there, backAgain) {
  backAgain.sendFile('index.html', {root: './public'});
});

opn(`http://localhost:${PORT}`);  ///automatically opens in default browser



app.listen(PORT, function() {
  // lets you know which port your server has started on
  console.log(`Port Number: ${PORT}`);
});
