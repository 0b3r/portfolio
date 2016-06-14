'use strict';

import navbarTpl from './navbar.html';
const logo = require('_images/Logo.svg');

function navbarComponent($window, $log) {
  'ngInject';

  let directive = {
    restrict: 'E',
    templateUrl: navbarTpl,
    controller: NavbarController,
    controllerAs: 'vm',
    bindToController: true,
    replace: true,
    link: linkFn
  };

  return directive;

  function NavbarController () {
    
    let self = this;

    console.log(logo);

    self.logo = logo;

    self.menu = [
      {
        name: 'Home',
        link: 'sdfdfs'
      },
      {
        name: 'About',
        link: 'sdfsdf'
      },
      {
        name: 'Projects',
        link: 'sdfsf'
      },
      {
        name: 'Style Guide',
        link: 'styleGuide'
      }
    ];
  }

  function linkFn (scope, elem, attrs, ngModelCtrl) {

    let navResizeHandler = function(e){
      let distanceY = $window.pageYOffset,
          shrinkOn = 250;

      if(distanceY > shrinkOn){
        elem.addClass('nav-small');
      }else{
        if(elem.hasClass('nav-small')){
          elem.removeClass('nav-small');
        }
      }
    };

    angular.element($window).bind('scroll', navResizeHandler);
  }

}

export default navbarComponent;
