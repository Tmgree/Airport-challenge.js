function Airport() {
  this.planes = [];
  this.weather = new Weather();
}


Airport.prototype.planes = function(){ return this.planes; };
//Airport.prototype.weather = function(){ return this.stormy; };
Airport.prototype.land = function(plane){
  this.planes.push(plane);
  plane.in_flight=false;
};
Airport.prototype.take_off = function(plane) {
  if (airport.weather.stormy() === false) {
  this.planes.pop(plane);
  plane.in_flight=true;}
  else {throw("Weather is Stormy")};
};
//Airport.prototype.stormy_weather = function(weather,plane) {
  //if (weather.stormy === false) {
//   this.planes.pop(plane);
//   plane.in_flight=true;}
//   else {return "Weather is Stormy"}
// }
