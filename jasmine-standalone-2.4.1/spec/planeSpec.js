describe("Plane", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("a new plane should be default in flight", function() {
     expect(plane.in_flight).toEqual(true);
  });

  it("should change in flight to false when a plane has landed", function() {
     airport.land(plane);
     expect(plane.in_flight).toEqual(false);
  });

  it("should change in flight to true when a plane has taken off", function() {
    var airport;
    airport = new Airport();
     airport.land(plane);
     airport.take_off(plane);
     expect(plane.in_flight).toEqual(true);
  });


});
