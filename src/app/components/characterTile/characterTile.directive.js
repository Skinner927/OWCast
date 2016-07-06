(function() {
  'use strict';

  angular
    .module('owcast')
    .directive('characterTile', characterTile)
    .controller('characterTileCtrl', characterTileCtrl);

  /** @ngInject **/
  function characterTile() {
    return {
      restrict: 'E',
      bindToController: {
        'character': '<',
        'onAdd': '&?',
        'onRemove': '&?'
      },
      templateUrl: 'app/components/characterTile/characterTile.html',
      controller: 'characterTileCtrl',
      controllerAs: 'tile'
    };
  }

  /** @ngInject **/
  function characterTileCtrl(){
    var vm = this;

    // Shorten it up for the UI
    vm.char = vm.character;

    console.log('ayyyy', this);
  }

})();
