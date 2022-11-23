var ColorDancer = function (top, left, timeBetweenSteps){
  BlinkyDancer.call(this, top, left, timeBetweenSteps)
this.change()
};


ColorDancer.prototype = Object.create(BlinkyDancer.prototype);
ColorDancer.prototype.constructor = ColorDancer;

ColorDancer.prototype.step = function (){
BlinkyDancer.prototype.step.call(this);
 

//still want to add funcionality where color change every blink

};
ColorDancer.prototype.change = function(){
  let r = Math.random() *(255-0)
  let g = Math.random() *(255-0)
  let b = Math.random() *(255-0)
this.$node.css("border" ,`10px solid rgb(${r},${g},${b})`)
}