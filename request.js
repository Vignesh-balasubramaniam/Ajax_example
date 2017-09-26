var req = angular.module('startapp', []);

req.controller('requestcontroller', function($scope, $http) {

    $http.get('https://raw.githubusercontent.com/aktsbot/freeCodeCamp/master/jsons/quotes.json')
        .then(function(response) {
            console.log(response);
            $scope.details = response.data;
            var detail = response.data;
            randdetail = detail[Math.floor(Math.random() * detail.length)];
            //console.log(rand);
            document.getElementById('display').innerHTML = "Quote:" + randdetail.quote + "By" + randdetail.by;
        });
});