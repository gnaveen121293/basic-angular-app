var app=angular.module("myapp2",['ngRoute']);
app.config(["$locationProvider","$routeProvider",function($locationProvider,$routeProvider)

 {
  $locationProvider.hashPrefix('')
 $routeProvider
  .when("/",
    
    {
      templateUrl:"pages2/home.html",
      controller:"myHomeController"
    })
.when("/register",
    
    {
      templateUrl:"pages2/register.html",
      controller:"myRegisterController"
    })

.when("/login",
    
    {
      templateUrl:"pages2/login.html",
      controller:"myLoginController"
    })
}])

app.controller("myHomeController",["$scope",function($scope)
{
  $scope.message="this is my home controller";
}])
app.controller("myRegisterController",["$scope",function($scope)
{
  $scope.message="this is my register controller";
}])
app.controller("myLoginController",["$scope",function($scope)
{
  $scope.message="this is my login controller";
}])