(function () {
    'use strict';
    angular.module('ps.presentation').directive('competitionRatings', function ($timeout) {
        return {
            restrict: 'E',
            templateUrl: '/modules/presentation/partials/competitionRatings.html',
            controller: function ($scope) {
                $scope.isWinnerRowVisible = function (index) {
                    var number = $scope.presentation.winnerList.length - index;
                    if ($scope.presentation.showWinnersInReverseOrder) {
                        number = index + 1;
                    }
                    return number <= $scope.presentation.winnersToShow;
                };
                //function to create a screenshot of the result
                // if winnersToShow == winnerList.length
                $timeout(function () {
                    html2canvas(document.body, {
                        onrendered: function (canvas) {
                            console.log("html2canvas render done");
                            var img = canvas.toDataURL("image/png");
                            //console.log(img);
                        }
                    });
                }, 0);
            }
        }
    });
})();