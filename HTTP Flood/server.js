const express = require("express")
const http = require("http");

const app = express();
const server = http.createServer(app);

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