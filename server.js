const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const mongodb = require("./server_conn/db");
const client = require("./server_conn/mqtt");
const mqttdata = require("./subscribe/data");
const app = express();
const server = require('http').createServer(app);
const cors = require('cors')
const bodyParser = require('body-parser');
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser")

app.io = require('socket.io')(server, { cors: { origin: "*" } });

require('./scoketdata/alarm')(app)

app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST"],
        Credential: true,
    })
);

app.use(bodyParser.json());
app.use(methodOverride("_method"));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dotenv.config({ path: "./.env" });
const port = process.env.PORT;


app.use(express.static(path.join(__dirname, 'views')));

        mongodb();

client.on('connect', () => {
    console.log("MQTT Broker Connected");

});

client.on('error', (err) => {
    console.log('Error connecting to MQTT Broker' + err);
});

mqttdata();

app.use('/data', require('./routes/auth'));

app.get('/', (req, res) => {
    res.render("./views/index.html");
})
server.listen(port, () => {
    console.log(`Server started on port ${port}`)
});


