var RandomDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = Dancer(top, left, timeBetweenSteps);
ColorDancer.call(this, top, left, timeBetweenSteps);
//this.$node = $('<span class="dancer"></span>');
 this.shape()
};
RandomDancer.prototype = Object.create(ColorDancer.prototype);
RandomDancer.prototype.constructor = RandomDancer;

RandomDancer.prototype.step = function (){
  ColorDancer.prototype.step.call(this);
   
  
  //still want to add funcionality where color change every blink
  
  };
  RandomDancer.prototype.shape = function (){
    function randomNumber1 () {
      return Math.floor(Math.random() * 25)
    }
    function randomNumber2 () {
      return Math.random() * (100 - 50) + 50
    }
    console.log(randomNumber1())
    console.log(randomNumber1())
    this.$node.css("clip-path", `polygon(
      ${randomNumber1()}% 
    ${randomNumber1()}%, 
    ${randomNumber1()}%
    ${randomNumber1()}%, 
    ${randomNumber1()}%
    ${randomNumber1()}%, 
    ${randomNumber1()}%
    ${randomNumber1()}%, 
    ${randomNumber2()}%
    ${randomNumber2()}%,
    ${randomNumber2()}% 
    ${randomNumber2()}%,
    ${randomNumber2()}% 
    ${randomNumber2()}%, 
    ${randomNumber2()}% 
    ${randomNumber2()}%, 
    ${randomNumber1()}% 
    ${randomNumber1()}%, 
    ${randomNumber1()}% 
    ${randomNumber1()}%)`)
    //this.$node.css("clip-path" , `polygon(50% 0%, 0% 100%, 100% 100%)`)
  }