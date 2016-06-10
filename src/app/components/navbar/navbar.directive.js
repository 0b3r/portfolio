'use strict';

import navbarTpl from './navbar.html';

function navbarComponent($log) {
  'ngInject';

  var directive = {
    restrict: 'E',
    templateUrl: navbarTpl,
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true
  };

  return directive;

  function NavbarController () {
    
    var self = this;
    self.menu = [
      {
        name: 'Home'
      },
      {
        name: 'About'
      },
      {
        name: 'Projects'
      },
    ];
  }

}

export default navbarComponent;
