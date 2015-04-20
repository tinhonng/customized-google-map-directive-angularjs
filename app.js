/**
 * Created by tinhonng on 4/19/15.
 */
var app = angular.module('myapp', []);

app.controller('myController', function($scope){
    $scope.user = {};
    $scope.users = [
        {name: 'Tin', lat: 37.3382, lon: -121.8803},
        {name: 'BP', lat: 37.34, lon: -121.9965},
        {name: 'Mary', lat: 37.45, lon: -121.90}
    ];
    $scope.add = function(user){
        if($scope.myForm.$valid) {
            $scope.users.push(user);
            $scope.user = angular.copy({});
            $scope.myForm.$setPristine();
        }
    }
});

app.directive('googlemap', function(){
   return {
       scope:{markers: '='},
       restrict: 'AEC',
       replace: 'true',
       templateUrl: 'map.html',
       link: function(scope, elem, attrs){
           var myLatlng = new google.maps.LatLng(scope.markers[1].lat,scope.markers[1].lon);
           var mapProp = {
               center:myLatlng,
               zoom:10,
               mapTypeId:google.maps.MapTypeId.ROADMAP,
               scrollwheel: false
           };
           var map=new google.maps.Map(document.getElementById("mapArea"),mapProp);

           var markers = scope.markers;
           if(markers){
               markers.forEach(function(e){
                   var marker = new google.maps.Marker({
                       position: new google.maps.LatLng(e.lat,e.lon),
                       map: map,
                       title: e.name
                   });
               });
           }
           google.maps.event.addDomListener(document.getElementById('submit-btn'), 'click', function(){
               var myLatlng = new google.maps.LatLng(scope.markers[1].lat,scope.markers[1].lon);
               var mapProp = {
                   center:myLatlng,
                   zoom:10,
                   mapTypeId:google.maps.MapTypeId.ROADMAP,
                   scrollwheel: false
               };
               var map=new google.maps.Map(document.getElementById("mapArea"),mapProp);

               var markers = scope.markers;
               if(markers){
                   markers.forEach(function(e){
                       var marker = new google.maps.Marker({
                           position: new google.maps.LatLng(e.lat,e.lon),
                           map: map,
                           title: e.name
                       });
                   });
               }
           });
       }
   }
});