'use strict';

import navbarTpl from './navbar.html';

function navbarComponent($window, $log) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: navbarTpl,
    controller: NavbarController,
    controllerAs: 'nav',
    link: linkFn
  };

  return directive;

  function NavbarController () {
    
    var self = this;

    self.test = 'sdfsdfsdfsdf';
    self.menu = [
      {
        name: 'Home',
        link: 'main',
        active: true
      },
      {
        name: 'About',
        link: 'sdfsdf',
        active: false
      },
      {
        name: 'Projects',
        link: 'sdfsf',
        active: false
      },
      {
        name: 'Style Guide',
        link: 'styleGuide',
        active: false
      }
    ];
    
  }

  function linkFn (scope, elem, attrs, ngModelCtrl) {

    
  }

}

export default navbarComponent;
