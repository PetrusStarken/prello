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
  function prelloListController(guidService) {
    this.$onInit = function () {
      this.title = this.list.title;
      this.cards = this.list.cards || [];
    };

    this.addNewCard = _addNewCard;
    this.onDragCard = _onDragcard;
    this.onDropCard = _onDropCard;

    function _addNewCard(name) {
      if (!name) {
        return;
      }

      this.cards.push({
        guid: guidService.new(),
        title: name
      });

      delete this.newCardName;
    }

    function _onDragcard(card) {
      this.cards = this.cards.filter(function (c) {
        return (c.guid !== card.guid);
      });
    }

    function _onDropCard(card) {
      this.cards.push(card);
    }
  }
})(angular);
