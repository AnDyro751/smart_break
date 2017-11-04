var path = require("path");
var express = require("express");
const app = express(),
  DIST_BUILD_DIR = path.join(__dirname, "/build/"),
  HTML_BUILD_FILE = path.join(DIST_BUILD_DIR, "index.html"),
  DEFAULT_PORT = 8081;
app.set("port", process.env.PORT || DEFAULT_PORT);
app.get('*.js', function (req, res, next) {
  req.url = req.url + '.gz';
  res.set('Content-Encoding', 'gzip');
  next();
});
  app.get('*.js', function (req, res, next) {
    req.url = req.url + '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  });


  app.use(express.static(DIST_BUILD_DIR));
  // app.get("*", (req, res) => res.sendFile(HTML_BUILD_FILE));
  app.get('/*', function (req, res) {
    res.sendFile(HTML_BUILD_FILE)
  });


app.listen(app.get("port"), function () {
  console.log('====================================');
  console.log(`Corriendo en http://localhost:${app.get('port')}`);
  console.log('====================================');
});
