(function() {
    'use strict';
    angular
        .module('app.web-component')
        .component('counter', {
            bindings: {
                count: '='
            },
            controller: CounterCtrl,
            template: function($element, $attrs) {
                return `
            <div class="counter">
              <input type="text" ng-model="$ctrl.count">
              <button type="button" ng-click="$ctrl.decrement();">-</button>
              <button type="button" ng-click="$ctrl.increment();">+</button>
            </div>
          `;
            }
        });

    /* @ngInject */
    function CounterCtrl() {
        this.increment = increment;
        this.decrement = decrement;

        function increment() {
            this.count++;
        }

        function decrement() {
            this.count--;
        }
    }

})();
