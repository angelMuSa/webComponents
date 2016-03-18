(function() {
    'use strict';

    describe('dataservice', function() {
        var mockApplicationContext = {
            getBusinessUnit: function() {
                return businessUnit;
            }
        };

        beforeEach(function() {
            module('app.core');

            bard.inject('dataservice', '$httpBackend');
            // inject(function($httpBackend, _dataservice_) {
            //     httpBackend = $httpBackend;
            //     dataservice = _dataservice_;
            // });
        });

        afterEach(function() {
            $httpBackend.verifyNoOutstandingExpectation();
            $httpBackend.verifyNoOutstandingRequest();
        });

        it('should get people when invoke the service', function() {
            var respValue = {};
            var response = {
                people: true
            };
            $httpBackend
                .expectGET('/api/people')
                .respond(200, response);

            dataservice.getPeople()
                .then(function(resp) {
                    respValue = resp;
                });

            $httpBackend.flush();
            expect(response.people).to.equal(respValue.people);
        });

    });
}());
