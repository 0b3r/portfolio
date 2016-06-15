'use strict';

export default angular.module('index.components', [
  require('./components/logo/logo.module').name,
	require('./components/footer/footer.module').name,
  require('./components/navbar/navbar.module').name
]);
