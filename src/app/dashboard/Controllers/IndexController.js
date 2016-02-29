module.exports = ['$rootScope','$scope',function($rootScope,$scope){
    $scope.message = 'Hello World!';
   
    console.log($scope.message);
}];