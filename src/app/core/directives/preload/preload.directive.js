'use strict';
import './preload.scss';

export default function (app) {

    app.directive('preload', preloadDirective);

    function preloadDirective ($window) {
        'ngInject';

        return {
            restrict: 'C',
            link: linkFn
        };

        function linkFn (scope, elem, attrs, ngModelCtrl) {
            let preloadHandler = function(){
                elem.removeClass('preload');
            };

            angular.element($window).bind('load', preloadHandler);

        }
    }
}