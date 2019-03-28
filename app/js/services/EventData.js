eventsApp.factory('eventData', function($resource) {
    var resource = $resource('/data/event/:id', {id:'@id'});
    return {
        getEvent: function() {
            return resource.get({id:1});
            // comment out HTTP service to utilize RESOURCE - based off of REST
            // return $http({method: 'GET', url:'/data/event/1'});
        },
        save: function(event) {
            event.id = 99;
            return resource.save(event);
        }
    };
});