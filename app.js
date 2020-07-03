( function(){
  'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstAppController', function ($scope)
  {
     $scope.name = "";
     $scope.totalValue = 0;
     $scope.displayNemeric = function ()
     {
       var totalNameValue = calculateNeumericString($scope.name);
       $scope.totalValue = totalNameValue;
     };
     function calculateNeumericString(string)
     {
      var totalStringValue = 0;
      for(var i=0;i < string.length;i++){
      
      
       totalStringValue += string.charCodeAt(i);
     }   
   return totalStringValue;
    }
      
  });

})();
