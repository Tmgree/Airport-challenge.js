describe("Airport", function() {
  //var airport;
  var plane;
  

  beforeEach(function() {
    airport = new Airport();
    plane = new Plane();
    weather = {stormy: function() {}};
  });

  it("has no planes ", function() {
     expect(airport.planes).toEqual([]);
  });

  it("should display a landed plane in the array", function() {
    airport.land(plane);
    expect(airport.planes).toContain(plane);
  });

  it("should display a removed plane from the array after it has taken off", function() {
    spyOn(weather, "stormy").and.returnValue(false);
    airport.land(plane);
    //debugger;
    airport.take_off(plane);
    expect(airport.planes).toEqual([]);
  });

  it("should raise an error if weather is stormy", function(){
    stub(Weather, 'stormy').returns(true);
    airport.land(plane);
    expect(airport.take_off(plane)).toThrowError("Weather is Stormy");
  });

//spyon



});
