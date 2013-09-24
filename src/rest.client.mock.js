angular.module('rest.client', [])
    .factory('restServiceHandler', function() {
        return jasmine.createSpy('restServiceHandlerSpy');
    })
    .factory('scopedRestServiceHandler', function(scopedRestServiceHandlerMock) {
        return function(it) {
            scopedRestServiceHandlerMock.context = it;
        };
    })
    .factory('scopedRestServiceHandlerMock', function() {
        return {};
    });