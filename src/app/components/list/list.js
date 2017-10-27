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
    this.addCard = _addCard;
    this.deleteCard = _deleteCard;
    this.onDragCard = _onDragcard;
    this.onDropCard = _onDropCard;

    function _addNewCard(name) {
      if (!name) {
        return;
      }

      this.addCard({
        guid: guidService.new(),
        listGuid: this.guid,
        title: name
      });

      delete this.newCardName;
    }

    function _onDragcard(card) {
      this.deleteCard(card);
    }

    function _onDropCard(card) {
      card.listGuid = this.guid;
      this.addCard(card);
    }

    function _deleteCard(card) {
      this.cards = storageService.deleteCard(card);
    }

    function _addCard(card) {
      this.cards = storageService.addCard(card);
    }
  }
})(angular);
