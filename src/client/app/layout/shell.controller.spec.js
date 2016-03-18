/* jshint -W117, -W030 */
describe('ShellControllerTest:', function() {
    var controller;

    beforeEach(function() {
        bard.appModule('app.layout');
        bard.inject('$controller', '$rootScope', '$timeout');
    });

    beforeEach(function() {
        controller = $controller('ShellController');
    });

    it('should be created successfully', function() {
        expect(controller).to.be.defined;
    });

    it('should show splash screen', function() {
        expect($rootScope.showSplash).to.be.true;
    });

    it('should hide splash screen after timeout', function(done) {
        $timeout(function() {
            expect($rootScope.showSplash).to.be.false;
            done();
        }, 3000);
        $timeout.flush();
    });
});
