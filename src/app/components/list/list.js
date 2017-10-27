(function (angular) {
  'use strict';

  angular.module('app').component('prelloList', {
    templateUrl: 'app/components/list/list.html',
    controller: prelloListController
  });

  /** @ngInject */
  function prelloListController() {
    this.title = 'New list';

    this.cards = [];
  }
})(angular);
