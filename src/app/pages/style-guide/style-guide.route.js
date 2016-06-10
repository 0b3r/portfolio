'use strict';

import styleGuideTpl from './style-guide.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('styleGuide', {
      url: '/',
      templateUrl: styleGuideTpl,
      controller: require('./style-guide.controller')
      controllerAs: 'sg',
    });

}

export default routeConfig;
