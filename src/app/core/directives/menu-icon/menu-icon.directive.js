'use strict';
import './menu-icon.scss';

export default function (app) {

    app.directive('menuIcon', menuIconDirective);

    function menuIconDirective () {
        'ngInject';

        return {
            restrict: 'E',
            link: linkFn,
            template: '<div class="menu-icon"><span></span></div>',
            replace: true
        };

        function linkFn (scope, elem, attrs, ngModelCtrl) {
            let menuIconClickHandler = function(){
                elem.toggleClass('menu-icon-open');
                $('nav').toggleClass('nav-open');
            };
            elem.on('click', menuIconClickHandler);
        }
    }
}