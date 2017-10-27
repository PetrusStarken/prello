(function (angular) {
  'use strict';

  angular.module('app').factory('guidService', guidServiceController);

  /** @ngInject */
  function guidServiceController() {
    var service = {
      new: _new
    };

    return service;

    /* eslint-disable no-mixed-operators, one-var, one-var-declaration-per-line */
    function _new() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
  }
})(angular);
