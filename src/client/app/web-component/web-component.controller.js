(function() {
    'use strict';

    angular
        .module('app.web-component')
        .controller('WebComponentController', WebComponentController);

    /* @ngInject */
    function WebComponentController() {
        var vm = this;

        vm.count = 4;

    }
})();
