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
  }
})(angular);
