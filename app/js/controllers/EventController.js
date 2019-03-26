'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {

            $scope.event = {
                name: 'Angular Boot Camp',
                date: '1/1/2013',
                time: '10:30 am',
                location: {
                    address: 'Google Headquarters',
                    city: 'Mountain View',
                    province: 'CA'
                },
                imageUrl: 'img/angularjs-logo.png',
                sessions: [
                    {
                        name: 'Directives Masterclass',
                        creatorName: 'Bob Smith',
                        duration: '1 hr',
                        level: 'Advanced',
                        abstract: 'In this session you will learn about the ins and out of directives.',
                        upVoteCount: 0

                    },
                    {
                        name: 'Scopes for fun and profit',
                        creatorName: 'Matt Hall',
                        duration: '2 hr',
                        level: 'Intro',
                        abstract: 'In this session you will learn how to RollerBlade like a boss.',
                        upVoteCount: 0
                    },
                    {
                        name: 'Well Behaved Controllers',
                        creatorName: 'Kelly Cook',
                        duration: '2 hr',
                        level: 'Intermediate',
                        abstract: 'In this session you will learn how to brew beer.',
                        upVoteCount: 0
                    }
                ]

            }
            $scope.upVoteSession = function(session) {
                session.upVoteCount++;
            };

            $scope.downVoteSession = function(session) {
                session.upVoteCount--;
            };
    }
);