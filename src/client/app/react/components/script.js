(function() {
    'use strict';
    angular
        .module('app.react')
        .directive('fastNg', fastNg);

    /* @ngInject */
    function fastNg() {
        return {
            restrict: 'E',
            scope: {
                framework: '='
            },
            link: function(scope, el, attrs) {
                scope.$watch('framework', function(newValue, oldValue) {
                    React.renderComponent(
                        MYCOMPONENT({
                            framework: newValue
                        }),
                        el[0]
                    );
                })
            }
        }
    }
})();
