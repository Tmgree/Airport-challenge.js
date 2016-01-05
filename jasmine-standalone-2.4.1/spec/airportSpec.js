describe("Airport", function() {
  var airport;
  var plane;

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
  });

  it("has no planes ", function() {
     expect(airport.planes).toEqual([]);
  });

  it("should display a landed plane in the array", function() {
    airport.land(plane)
    expect(airport.planes).toContain(plane)
  });

  it("should display a remove a plane from the array after it has taken off", function() {
    airport.land(plane)
    airport.take_off(plane)
    expect(airport.planes).toEqual([])
  });




});
