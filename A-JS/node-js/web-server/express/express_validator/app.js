const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const hbs = require("express-hbs");
const cookieParser = require("cookie-parser");
const session = require("express-session");

// User router

// Express settings
const app = express();
app.use(bodyParser.json());
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(cors());

app.use(cookieParser());
app.use(
    session({
        secret: "positronx",
        saveUninitialized: false,
        resave: false
    })
);

// Serve static resources
app.use("/public", express.static("public"));

// Render View
app.engine(
    "hbs",
    hbs.express4({
        partialsDir: __dirname + "/views/partials"
    })
);
app.set("view engine", "hbs");
app.set("views", __dirname + "/views/partials");

// Initiate API
app.use('/', require('./routes/home'))
app.use("/signup", require("./routes/signup"));

// Define PORT
const port = 3001;
const server = app.listen(port, () => {
    console.log("Connected to port " + port);
});