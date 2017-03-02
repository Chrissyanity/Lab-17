var app = angular.module('redditMod');
app.controller('redCtrl', function($scope, $http) {
    $scope.redCollection = {};
    $http({
            url: 'https://www.reddit.com/r/aww/.json',
            method: 'GET'
        })
        .then(function successfulCallBack(response) {
            console.log(response);
            $scope.redCollection = response.data.data.children;


        });
});
