(function (angular) {
  'use strict';

  angular.module('app').component('prelloBoard', {
    templateUrl: 'app/pages/board/board.html',
    controller: prelloBoardController
  });

  /** @ngInject */
  function prelloBoardController() {
    this.title = 'Default board';
    this.lists = [];

    this.addNewList = _addNewList;

    function _addNewList(name) {
      if (!name) {
        return;
      }

      this.lists.push({
        title: name
      });

      delete this.newListName;
    }
  }
})(angular);
