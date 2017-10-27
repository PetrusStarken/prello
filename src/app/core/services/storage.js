(function (angular) {
  'use strict';

  angular.module('app').factory('storageService', storageServiceController);

  /** @ngInject */
  function storageServiceController($localStorage) {
    this.getLists = _getLists;
    this.getTitle = _getTitle;
    this.getListByGuid = _getListByGuid;
    this.getCardsByListGuid = _getCardsByListGuid;
    this.getCardByGuid = _getCardByGuid;
    this.addCard = _addCard;
    this.deleteCard = _deleteCard;

    return this;

    function _getLists() {
      if (!$localStorage.lists) {
        $localStorage.lists = [];
      }

      return $localStorage.lists;
    }

    function _getTitle() {
      return $localStorage.title || 'Default board';
    }

    function _getListByGuid(guid) {
      return _getLists().find(function (list) {
        return (list.guid === guid);
      });
    }

    function _getCardsByListGuid(guid) {
      return _getListByGuid(guid).cards;
    }

    function _getCardByGuid(card) {
      return _getCardsByListGuid(card.listGuid).cards.find(function (card) {
        return (card.guid === card.guid);
      });
    }

    function _addCard(card) {
      var list = _getListByGuid(card.listGuid);

      list.cards.push(card);

      return list.cards;
    }

    function _deleteCard(card) {
      var list = _getListByGuid(card.listGuid);
      list.cards = list.cards.filter(function (c) {
        return (c.guid !== card.guid);
      });

      return list.cards;
    }
  }
})(angular);
