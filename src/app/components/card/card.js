(function (angular) {
  'use strict';

  angular.module('app').component('prelloCard', {
    templateUrl: 'app/components/card/card.html',
    controller: prelloCardController
  });

  /** @ngInject */
  function prelloCardController() {
    this.title = 'New Card';
    this.description = '';
  }
})(angular);
