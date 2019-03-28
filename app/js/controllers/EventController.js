'use strict';

eventsApp.controller('EventController',
    function EventController($scope, eventData) {

        eventData.getEvent()
            .$promise
            .then(function(event) {$scope.event = event;  })
                .catch(function(response) {console.log(response); }
            );

        // HTTP resource to be replaced with $Resource service
        //    .success(function(event) { $scope.event = event; })
        //    .error(function(data, status, headers, config) {
        //     $log.warn(data, status, headers(), config);
        // });

            $scope.upVoteSession = function(session) {
                session.upVoteCount++;
            };

            $scope.downVoteSession = function(session) {
                session.upVoteCount--;
            };
    }
);