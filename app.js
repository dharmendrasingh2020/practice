( function(){
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstAppController', function ($scope)
  {
     $scope.name="";
     $scope.totalValue= 0;
     $scope.displayNemeric = funtion ()
     {
       var totalNameValue = calculateNeumericString($scope.name);
       $scope.totalValue = totalNameValue;
     };
     function calculateNeumericString(string)
     {
      var totalNameValue =0;
       totalStringValue +=string.charCodeAt(i);
     }   
   return totalStringValue;
      
  });

})();
