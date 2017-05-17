var app=angular.module("myapp",[]);
app.controller("myController",["$scope",function($scope)
{
  $scope.message="hello";
  $scope.employeeList=[
  {
     sno:1,name:'sundar', phone:12345 ,city:'bangalore'
  }]



}])