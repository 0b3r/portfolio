'use strict';

// index.html page to dist folder
import '!!file-loader?name=[name].[ext]!../favicon.ico';

// main App module
import "./index.module";
import "_stylesheets/sass/index.scss";


angular.element(document).ready(function () {
  angular.bootstrap(document, ['0b3r'], {
    strictDi: true
  });
});
