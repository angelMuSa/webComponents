(function() {
    'use strict';

    angular
        .module('app.react')
        .component('reactRender', {
            restrict: 'E',
            controller: Controller,
            controllerAs: 'vm',
            bindings: {
                framework: '='
            }
        });

    /* @ngInject */
    function Controller($scope, $element) {
        var vm = this;

        activate();

        function activate() {
            $scope.$watch('vm.framework', function(newValue, oldValue) {
                React.renderComponent(
                    MYCOMPONENT({
                        framework: newValue
                    }),
                    $element[0]
                );
            })
        }
    }
})();
