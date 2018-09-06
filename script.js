var app = angular.module('app', []);


app.service('perService', ['$http', '$log', function($http, $log){
    this.getPersons = function(cb){
        $http({
            url: 'MOCK_DATA.JSON',
            method: 'GET'
        }).then(function(resp){
            cb(resp.data);
            var x = resp.data;
            $log.log(x.persons);
        },function(resp){
            $log.log("Error Occurred...");
        });
    };
}]);

app.directive('perDetails', function(){
    return{
        restrict: 'E',
        templateUrl: 'per-details.html'
    };
});

app.controller('mainController', ['$scope', 'perService', function($scope, perService){
    perService.getPersons(function(r){
        $scope.persons = r.persons; 
    });
}]);