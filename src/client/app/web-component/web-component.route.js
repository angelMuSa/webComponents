(function() {
    'use strict';

    angular
        .module('app.web-component')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [{
            state: 'web-component',
            config: {
                url: '/web-component',
                templateUrl: 'app/web-component/web-component.html',
                controller: 'WebComponentController',
                controllerAs: 'vm',
                title: 'WebComponent',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> Web Component'
                }
            }
        }];
    }
})();
