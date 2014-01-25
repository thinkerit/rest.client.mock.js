angular.module('rest.client', [])
    .factory('installRestDefaultHeaderMapper', function() {
        return jasmine.createSpy('installRestDefaultHeaderMapper');
    })
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