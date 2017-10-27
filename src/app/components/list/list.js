(function (angular) {
  'use strict';

  angular.module('app').component('prelloList', {
    templateUrl: 'app/components/list/list.html',
    controller: prelloListController,
    bindings: {
      list: '='
    }
  });

  /** @ngInject */
  function prelloListController() {
    this.$onInit = function () {
      this.title = this.list.title;
      this.cards = this.list.cards || [];
    };

    this.addNewCard = _addNewCard;

    function _addNewCard(name) {
      if (!name) {
        return;
      }

      this.cards.push({
        title: name
      });

      delete this.newCardName;
    }
  }
})(angular);
