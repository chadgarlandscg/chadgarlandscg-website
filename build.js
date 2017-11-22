var fs = require("fs");
var browserify = require("browserify");
var envify = require('envify')
var watchify = require('watchify');

require('dotenv').config()

var b = browserify("./web/src/index.js", {
        debug: true,
        cache: {},
        packageCache: {}
    })
    .plugin(watchify,{verbose: true})
    .transform("babelify", {
        presets: ["es2015", "react", "babel-preset-stage-0" ],
        plugins: ["babel-plugin-transform-decorators-legacy"]
    })
    .transform(envify);

b.on('update', bundle);
bundle();

function done() {
  console.log(err.message);
  this.emit('end');
}

function bundle() {
    b.bundle().on('error', function(err){
      // print the error (can replace with gulp-util)
      // console.log(Object.keys(err));
      console.log(`${err.message} ${err.loc} ${err.codeFrame}`);
      // console.log("LOC:",err.loc);
      // console.log("FRAME:",err.codeFrame);
      // console.log("FRAME:",err.message);
      // end this stream
      this.emit('end');
    }).pipe(fs.createWriteStream('./web/public/bundle.js'));
}
