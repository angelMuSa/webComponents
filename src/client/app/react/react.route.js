(function() {
    'use strict';

    angular
        .module('app.react')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates(), '/react');
    }

    function getStates() {
        return [{
            state: 'react',
            config: {
                url: '/react',
                templateUrl: 'app/react/react.html',
                controller: 'ReactController',
                controllerAs: 'vm',
                title: 'react',
                settings: {
                    nav: 2,
                    content: '<i class="fa fa-lock"></i> React'
                }
            }
        }];
    }
})();
