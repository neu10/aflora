/**
 * Created by Nutan on 3/12/2016.
 */


/**
 * Create namespace
 */
var Application = {};
Application.Factories = {};

/**
 * Create app instance
 */
Application.instance = angular.module('AfloridaVilla', ['ngRoute','ui.bootstrap','jkuri.gallery','duScroll','ksSwiper']);


Application.instance.directive("scroll", function ($window) {
    return function(scope, element, attrs) {
        angular.element($window).bind("scroll", function() {
            if ($('body').scrollTop()>= angular.element('.nav-header-center').outerHeight()) {
                angular.element('.move-me').addClass('navbar-fixed-top');
                angular.element('.hidden-nav').addClass('showme');
                angular.element('.showme').removeClass('hidden-nav');
            } else {
                angular.element('.navbar-fixed-top').removeClass('navbar-fixed-top');
                angular.element('.showme').addClass('hidden-nav');
                angular.element('.hidden-nav').removeClass('showme');
            }
            scope.$apply();
        });
    };
});


    Application.instance
    .controller('ContactUsController',['$scope','$http', function ($scope,$http) {

        $scope.today = function() {
            $scope.dt = new Date();
            console.log('faf '+$scope.dt);
        };
        $scope.showForm = true;
        $scope.today();
        $scope.dateOptions = {
            dateDisabled: false,
            formatYear: 'yy',
            maxDate: new Date(2020, 5, 22),
            minDate: new Date(),
            startingDay: 1
        };
        $scope.popup2 = {
            opened: false
        };

        $scope.processForm = function(formData) {
            formData.arrivalDate = $scope.dt.toDateString();
            $http({
                method  : 'POST',
                url     : 'newemail.php',
                data    : $.param(formData),  // pass in data as strings
                headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
            })
                .success(function(data) {
                    console.log(data);
                        $scope.showForm = false;
                });
        };


      /*  $scope.contactus = function (formData) {
        console.log(formData.email +" email");
            var request = $http({
                method: "POST",
                url: "newemail.php",
                data: formData,
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            });

            request.success(function(data){
                    console.log(data);
                    if (data.success) { //success comes from the return json object
                        $scope.submitButtonDisabled = true;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-success';
                    } else {
                        $scope.submitButtonDisabled = false;
                        $scope.resultMessage = data.message;
                        $scope.result='bg-danger';
                    }
                });

        };*/
        $scope.open2 = function() {
            $scope.popup2.opened = true;
        };


    }]);
Application.instance
    .controller('PhotoController',['$scope', function ($scope) {
        $scope.images = [
            { thumb: 'images/thumbnails/newfront.jpg',  img: 'images/newfront.jpg', description: 'front view'},
            { thumb: 'images/thumbnails/entrance.jpg',  img: 'images/entrance.jpg', description: 'entrance'},
            { thumb: 'images/thumbnails/master_bedroom_1.jpg',  img: 'images/master_bedroom_1.jpg', description: 'master bedroom'},
            { thumb: 'images/thumbnails/twin_bedroom.jpg', img: 'images/twin_bedroom.jpg', description: 'twin bedroom'},
            { thumb: 'images/thumbnails/bedroom_3.jpg',img: 'images/bedroom_3.jpeg', description: 'bedroom'},
            { thumb: 'images/thumbnails/queen_en_suite.jpg',img: 'images/queen_en_suite.jpg', description: 'queen en suite'},
            { thumb: 'images/thumbnails/breakfast_table.jpg', img: 'images/breakfast_table.jpg', description: 'breakfast table'},
            { thumb: 'images/thumbnails/breakfast_table_kitchen.jpg', img: 'images/breakfast_table_kitchen.jpg', description: 'breakfast table kitchen'},
            { thumb: 'images/thumbnails/dining_area.jpg',  img: 'images/dining_area.jpg', description: 'dining area'},
            { thumb: 'images/thumbnails/family_room_dining.jpg', img: 'images/family_room_dining.jpg', description: 'family room dining'},
            { thumb: 'images/thumbnails/clubhouse.jpg',  img: 'images/clubhouse.jpg', description: 'clubhouse'},
            { thumb: 'images/thumbnails/en_suite_room.jpg',  img: 'images/en_suite_room.jpg', description: 'en suite room'},
            { thumb: 'images/thumbnails/family_room_1.jpg',  img: 'images/family_room_1.jpg', description: 'family room'},
            { thumb: 'images/thumbnails/games_room.jpg',  img: 'images/games_room.jpg', description: 'games room'},
            { thumb: 'images/thumbnails/kitchen_1.jpg',  img: 'images/kitchen_1.jpg', description: 'kitchen'},
            { thumb: 'images/thumbnails/kitchen_2.jpg',  img: 'images/kitchen_2.jpg', description: 'kitchen'},
            { thumb: 'images/thumbnails/kitchen_room_living.jpg',  img: 'images/kitchen_room_living.jpg', description: 'kitchen living room'},
            { thumb: 'images/thumbnails/laundary.jpg', img: 'images/laundary.jpg', description: 'laundary'},
            { thumb: 'images/thumbnails/livig_room_1.jpg', img: 'images/livig_room_1.jpg', description: 'living room'},
            { thumb: 'images/thumbnails/livig_room_2.jpg', img: 'images/livig_room_2.jpg', description: 'living room'},
            { thumb: 'images/thumbnails/livig_room_3 (1).jpg', img: 'images/livig_room_3 (1).jpg', description: 'living room'},
            { thumb: 'images/thumbnails/master_bathroom_1.jpg',  img: 'images/master_bathroom_1.jpg', description: 'master bathroom'},
            { thumb: 'images/thumbnails/master_bathroom_2.jpg',  img: 'images/master_bathroom_2.jpg', description: 'master bathroom'},
            { thumb: 'images/thumbnails/hall_bathroom.jpg',  img: 'images/hall_bathroom.jpg', description: 'hall bathroom'},
            { thumb: 'images/thumbnails/pool_1.jpg',  img: 'images/pool_1.jpg', description: 'pool'},
            { thumb: 'images/thumbnails/pool_2.jpg',  img: 'images/pool_2.jpg', description: 'pool'},
            { thumb: 'images/thumbnails/pool_3.jpg',  img: 'images/pool_3.jpg', description: 'pool'},
            { thumb: 'images/thumbnails/pool_4.jpg', img: 'images/pool_4.jpg', description: 'pool'},
            { thumb: 'images/thumbnails/terrace_area.jpg', img: 'images/terrace_area.jpg', description: 'terrace area'},
            { thumb: 'images/thumbnails/beach_bollyball.jpg',img: 'images/beach_bollyball.jpg', description: 'beach bollyball'},
            { thumb: 'images/thumbnails/children_play_area.jpg',  img: 'images/children_play_area.jpg', description: 'children play area'},
            { thumb: 'images/thumbnails/clubhouse_interior.jpg', img: 'images/clubhouse_interior.jpg', description: 'clubhouse interior'},
            { thumb: 'images/thumbnails/community_pool_1.jpg',  img: 'images/community_pool_1.jpg', description: 'community pool'},
            { thumb: 'images/thumbnails/community_pool_2.jpg',  img: 'images/community_pool_2.jpg', description: 'community pool'},
            { thumb: 'images/thumbnails/fitness_center.jpg',  img: 'images/fitness_center.jpg', description: 'fitness center'}



        ];

    }]);
Application.instance
    .controller('ModalDemoCtrl',['$scope','$uibModal', function ($scope,$uibModal) {
        $scope.animationsEnabled = true;
        $scope.buttonLabel = 'Show Prices in US dollors';
        $scope.showPoundsRate = true;
        $scope.buttonClicked = false;
        $scope.poundsPriceOffPeak = 495;
        $scope.poundsPricePeak = 580;
        $scope.poundsPricePeakAug = 520;
        $scope.toggleCurrency = function () {
            $scope.buttonClicked = !$scope.buttonClicked;
            if(!$scope.buttonClicked){
                $scope.buttonLabel = 'Show Prices in US dollors';
                $scope.showPoundsRate = true;
            }else{
                $scope.buttonLabel = 'Show Prices in pounds';
                $scope.showPoundsRate = false;
            }
        };
        var app_id="becccbd1b1b24688a98897945f140844"; // your unique app id goes here
        var uri=encodeURI("http://openexchangerates.org/latest.json?app_id="+app_id);
        $.get(uri,function(json) {
            $scope.conversionRate=json.rates.GBP;
            console.log('rate '+$scope.conversionRate);
        },"jsonp");

        $scope.openTerms = function (size) {

            var modalInstance = $uibModal.open({
                templateUrl: 'conditions.html',
                size: size
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };


    }]);



