var app = angular.module("madLibApp");
app.controller('SubmitCtrl', function($scope,madLibFactory){
    $scope.words = madLibFactory.word;
});