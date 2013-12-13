'use strict';

angular.module('TodoApp', []);

function TodoController($scope) {

    $scope.items = [];

    $scope.editmode = false;
    $scope.hidefinished = false;

    $scope.add = function () {
        $scope.items.push({
            title: "Task...",
            done: false
        });
    };

    $scope.doneitems = function(item) {
        return !$scope.hidefinished || !item.done;
    }

}
