'use strict';

import logoTpl from './logo.html';

function logoComponent() {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: logoTpl,
    controller: LogoController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true,
    link: linkFn
  };

  return directive;

  function LogoController () {
    
    let self = this;

   
  }

  function linkFn (scope, elem, attrs, ngModelCtrl) {

    
  }

}

export default logoComponent;
