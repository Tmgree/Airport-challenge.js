function Weather() {
  this.stormlevel=Math.random();
}
Weather.prototype.stormy = function(){
  if(this.stormlevel>=0.9) {return(true);}
  else {return(false);};
};
