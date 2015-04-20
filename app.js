/**
 * Created by tinhonng on 4/19/15.
 */
var app = angular.module('myapp', []);

app.controller('myController', function($scope){
    $scope.users = [{
        name: 'Tin', lat: 32.32, lon: 3567
    }];
});

app.directive('googlemap', function(){
   return {
       scope:{markers: '='},
       restrict: 'AEC',
       replace: 'true',
       templateUrl: 'map.html',
       link: function(scope, elem, attrs){
           var myLatlng = new google.maps.LatLng(scope.markers[0].lat,scope.markers[0].lon)
           var mapProp = {
               center:myLatlng,
               zoom:5,
               mapTypeId:google.maps.MapTypeId.ROADMAP
           };
           var map=new google.maps.Map(document.getElementById("mapArea"),mapProp);
           var marker = new google.maps.Marker({
               position: myLatlng,
               map: map,
               title: scope.markers[0].name
           });
       }
   }
});