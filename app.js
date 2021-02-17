const express = require("express");
const routes = require("./routes");
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;
const app = express();

app.set("view engine", "pug");

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true }));
app.use("/", routes);

app.listen(port, () => {
    console.log(`App is running on http://localhost:${port}`);
});