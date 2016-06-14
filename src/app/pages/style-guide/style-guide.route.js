'use strict';

import styleGuideTpl from './style-guide.html';

function routeConfig($stateProvider) {
  'ngInject';

  $stateProvider
    .state('styleGuide', {
      url: '/style-guide/',
      templateUrl: styleGuideTpl,
      controller: require('./style-guide.controller'),
      controllerAs: 'sg'
    });

}

export default routeConfig;
