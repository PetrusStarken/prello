(function (angular) {
  'use strict';

  angular.module('app').component('prelloBoard', {
    templateUrl: 'app/pages/board/board.html',
    controller: prelloBoardController
  });

  /** @ngInject */
  function prelloBoardController(guidService, storageService) {
    this.$onInit = function () {
      this.title = storageService.getTitle();
      this.lists = storageService.getLists();
    };

    this.addNewList = _addNewList;

    function _addNewList(name) {
      if (!name) {
        return;
      }

      this.lists.push({
        guid: guidService.new(),
        title: name,
        cards: []
      });

      delete this.newListName;
    }
  }
})(angular);
