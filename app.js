( function(){
    'use strict';
    angular.module('myFirstApp',[])


    .controller('MyFirstAppController', function ($scope)
    {

       $scope.name="";
       $scope.totalValue= 0;


       $scope.displayNemeric=funtion()
       {
         var toatlNameValue =calculateNeumericString($scope.name)
         $scope.totalValue = toatlNameValue;

       };

       funtion calculateNeumericString(string){
        var toatlStringValue =0;
         toatlStringValue +=string.charCodeAt(i);
       }   
     return toatlStringValue;
        
    });

})();
 
