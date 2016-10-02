/**
 * Created by carmen on 9/29/16.
 */

(function() {
    'use strict';

    angular.module('LunchCheckerApp', [])
        .controller('LunchCheckerController', LunchCheckerController);

    LunchCheckerController.$inject = ['$scope'];

    function LunchCheckerController($scope) {
        $scope.checkLunchItems = function () {
            var n_items = countItems($scope.lunch_items);
            
            if (n_items == 0) {
                $scope.lunch_message = "Please enter data first.";
                $scope.color = 'danger';
            } else if (n_items <= 3) {
                $scope.lunch_message = "Enjoy!";
                $scope.color = 'success';
            } else {
                $scope.lunch_message = "Too much!";
                $scope.color = 'success';
            }
        };

        function countItems(s) {
            if (s == undefined || s.length == 0) {
                return 0;
            }
            var items = s.split(',');
            var count = 0;
            for (var i = 0; i < items.length; i++) {
                if (items[i].trim().length > 0) {
                    count++;
                }
            }
            return count;
        }
    }
})();