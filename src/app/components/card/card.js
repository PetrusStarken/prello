(function (angular) {
  'use strict';

  angular.module('app').component('prelloCard', {
    templateUrl: 'app/components/card/card.html',
    controller: prelloCardController,
    bindings: {
      card: '='
    }
  });

  /** @ngInject */
  function prelloCardController() {
    this.$onInit = function () {
      this.title = this.card.title;
      this.description = undefined;
    };

    this.addDescription = _addDescription;

    function _addDescription(description) {
      if (!description) {
        return;
      }

      this.description = description;

      delete this.newCardDescription;
    }
  }
})(angular);
