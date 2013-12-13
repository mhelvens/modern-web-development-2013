'use strict';

angular.module("Modern Webdevelopment 4", ['ngAnimate', 'ui.bootstrap']);

function ListController($scope) {
	$scope.list = [
		{text: "item 1", done: false},
		{text: "item 2", done: false}
	];

	$scope.add = function () {
		$scope.list.push({ text: "task...", done: false });
	};

	$scope.remove = function (item) {
		var oldList = $scope.list;
		$scope.list = [];
		angular.forEach(oldList, function (jtem) {
			if (item !== jtem) {
				$scope.list.push(jtem);
			}
		});
	};

	$scope.showItem = function (item) {
		return !($scope.hideDone && item.done);
	}
}
