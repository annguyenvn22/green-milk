/*  This directive used to track navbar
 When user scroll down 100px, navbar's background-color
 will be changed
 credit: http://jsfiddle.net/88TzF/
 */
(function () {
    'use strict';

    angular
        .module('core')
        .directive('scroll', scroll);

    scroll.$inject = ['$window'];

    function scroll($window) {
        bindScroll.$inject = ['scope', 'element', 'attrs'];
        function bindScroll(scope, element, attrs) {
            angular.element($window).bind("scroll", function () {
                if (this.pageYOffset >= 100) {
                    scope.boolChangeClass = true;
                } else {
                    scope.boolChangeClass = false;
                }
                scope.$apply();
            });
        }

        return bindScroll;
    }
}());
