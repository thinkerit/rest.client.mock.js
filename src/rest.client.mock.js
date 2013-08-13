angular.module('rest.client', [])
    .factory('scopedRestServiceHandler', function(scopedRestServiceHandlerMock) {
        return function(it) {
            scopedRestServiceHandlerMock.context = it;
        };
    })
    .factory('scopedRestServiceHandlerMock', function() {
        return {};
    });