function Airport() {
  this.planes = [];
}

Airport.prototype.planes = function(){ return this.planes; };
Airport.prototype.land = function(plane){
  this.planes.push(plane);
  plane.in_flight=false
}
Airport.prototype.take_off = function(plane) {
  this.planes.pop(plane);
  plane.in_flight=true;
}
