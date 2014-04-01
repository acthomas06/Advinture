'use strict';

describe('Service: Eventservice', function () {

  // load the service's module
  beforeEach(module('advintureApp'));

  // instantiate service
  var Eventservice;
  beforeEach(inject(function (_Eventservice_) {
    Eventservice = _Eventservice_;
  }));

  it('should do something', function () {
    expect(!!Eventservice).toBe(true);
  });

});
