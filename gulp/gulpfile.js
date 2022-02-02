//==================================================================================================
//
// gulp version : 4.0.2
// 
// task : sass compile (command - gulp)
//        all file monitoring and browser reload (command - gulp)
//        file upload (command - gulp upload)
//
//==================================================================================================

//
// project setting
////////////////////////////////////////////////////////////////////////////////////////////////////
var documentRoot = "../"; //server root directory
var projectRoot = "../"; //project root (index directory)
// sass - css file directory
var sassDirectory = projectRoot + "src/scss/"; //sass file directory
var cssOutputDirectory = projectRoot + "assets/" //css file output directory
var sassCompileStyle = "expanded"; //sass compile style [expanded, nested, campact, compressed]
// local server
var proxy = "localhost:8888"; //proxy
var port = "8888"; //port
// file upload
var serverHost = ""; //server host
var serverUser = ""; //server user name
var serverPassword = ""; //server password
var uploadDomain = ""; //upload domain
var uploadPath = ""; //project directory path

//
// definition
////////////////////////////////////////////////////////////////////////////////////////////////////
// gulp
var gulp = require("gulp");
// error handling
var plumber = require("gulp-plumber");
var notify = require("gulp-notify");
// sass compile
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var sassGlob = require("gulp-sass-glob");
var sourcemaps = require("gulp-sourcemaps");
// browser reload
var browserSync = require("browser-sync");
var connect = require("gulp-connect-php");
// file upload
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
const rename = require('gulp-rename');

//
// sass compile
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task("sass", function(done) {
  return gulp
    .src([sassDirectory + "**/*.scss"])
    .pipe(sourcemaps.init())
    .pipe(plumber({ errorHandler: notify.onError("Error: <%= error.message %>") }))
    .pipe(sassGlob())
    .pipe(sass({ outputStyle: sassCompileStyle }))
    .pipe(postcss([autoprefixer({ cascade: false })]))
    .pipe(rename({ dirname: './' }))
    .pipe(sourcemaps.write("./map/"))
    .pipe(gulp.dest(cssOutputDirectory))
    .pipe(browserSync.stream())
    .on("end", function() {
      console.log("==============================\n" +
        "sass compile finished\n" +
        "==============================");
    });
  done();
});

//
// browser reload
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task("browser-sync", function(done) {
  connect.server({
      base: documentRoot,
      port: port
    },
    function() {
      browserSync({
        proxy: proxy,
      });
    }
  );
  console.log("==============================\n" +
    "local server connect finished\n" +
    "==============================");
  done();
})

gulp.task("browser-reload", function(done) {
  browserSync.reload();
  console.log("==============================\n" +
    "browser reload finished\n" +
    "==============================");
  done();
});

//
// file upload
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task("upload", function(done) {
  var config = {
    host: serverHost,
    user: serverUser,
    password: serverPassword,
    remoteRoot: "/" + uploadDomain + uploadPath,
    localRoot: projectRoot,
    include: ["**"],
    exclude: ["**/*.scss", "gulp/**", "gulp/**/.*", "gulp/**/.*/**"],
    deleteRemote: false,
    forcePasv: true
  };
  ftpDeploy.deploy(config, function(err) {
    if (err) {
      console.log(err);
    } else {
      console.log("==============================\n" +
        "file upload finished\n" +
        "==============================");
    }
  });
  done();
});

//
// file monitoring
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task("watch", function(done) {
  gulp.watch([sassDirectory + "*.scss", "!gulp/**", "!gulp/**/.*", "!gulp/**/.*/**"], gulp.task("sass"));
  gulp.watch([projectRoot + "**", projectRoot + "../sale/*", "!gulp/**", "!gulp/**/.*", "!gulp/**/.*/**"], gulp.task("browser-reload"));
});

//
// default
////////////////////////////////////////////////////////////////////////////////////////////////////
gulp.task("default", gulp.series(gulp.parallel("sass", "browser-sync", "watch")));