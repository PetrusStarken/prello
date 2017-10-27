(function (angular) {
  'use strict';

  angular.module('app').component('prelloList', {
    templateUrl: 'app/components/list/list.html',
    controller: prelloListController,
    bindings: {
      guid: '<'
    }
  });

  /** @ngInject */
  function prelloListController(guidService, storageService) {
    this.$onInit = function () {
      var list = storageService.getListByGuid(this.guid);

      this.title = list.title;
      this.guid = list.guid;
      this.cards = list.cards;
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
        listGuid: this.guid,
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
      card.listGuid = this.guid;
      this.cards.push(card);
    }
  }
})(angular);
