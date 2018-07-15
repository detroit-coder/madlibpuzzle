var app = angular.module('madLibApp');
app.controller('InputCtrl', function($scope, madLibFactory){
$scope.save = function(){
    madLibFactory.word.noun = $scope.noun;
    madLibFactory.word.adjective = $scope.adjective;
    madLibFactory.word.verb = $scope.verb;
    madLibFactory.word.noun2 = $scope.noun2;
    madLibFactory.word.adjective2 = $scope.adjective2;
    madLibFactory.word.verb2 = $scope.verb2;
    madLibFactory.word.noun3 = $scope.noun3;
} 
});