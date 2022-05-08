const app = require("express")();
const bodyParser = require("body-parser");
const Routes = require("./Routes");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send("Welcome to kanbar board api"));
app.use("/boards", Routes);

var server = app.listen(1999, () => {
  var port = server.address().port;
  console.log("running at http://localhost:%s", port);
});
