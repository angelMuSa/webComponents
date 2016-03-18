(function() {
    'use strict';

    angular
        .module('app.react')
        .controller('ReactController', ReactController);

    /* @ngInject */
    function ReactController() {
        var vm = this;

        vm.framework = null;
    }
})();
