const express = require("express")
const http = require("http");
const rateLimit = require('express-rate-limit');

const app = express();
const server = http.createServer(app);

const limiter = rateLimit({
    windowMs: 1 * 60 * 1000, // 1 minuto
    max: 20, // Limite di 20 richieste per IP al minuto
    message: 'Troppi tentativi, riprova più tardi.',
    handler: (req, res, next) => {
        console.log(`IP bloccato per eccesso di richieste: ${req.ip}`);
        res.status(429).send('Troppi tentativi, riprova più tardi.');
    }
});

app.use(limiter);

const calculation = () => {
    let sum = 0;
    for (let i = 0; i < 1e8; i++) {
        sum += i;
    }
    return sum;
};

app.get("/", (req, res) => {
    requestIP = req.ip;
    calculation();
    console.log("Richiesta ricevuta. IP: ", requestIP);
    res.status(200).send("Ciao\n");
})

server.listen(8000, () => {
    console.log("Server avviato sulla porta 8000");
})