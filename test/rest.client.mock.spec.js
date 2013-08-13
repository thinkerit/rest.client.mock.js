describe('rest.client.mock', function() {
    var rest, mock;

    beforeEach(module('rest.client'));

    describe('scoped rest client', function() {
        beforeEach(inject(function(scopedRestServiceHandler, scopedRestServiceHandlerMock) {
            rest = scopedRestServiceHandler;
            mock = scopedRestServiceHandlerMock;
        }));

        it('trap context', function() {
            rest('context');
            expect(mock.context).toEqual('context');
        });
    });
});