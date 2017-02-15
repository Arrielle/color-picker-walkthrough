$(document).ready(function(){ //doc ready start
console.log('jQuery is ready to go!'); // does my jQuery work?
var colorArray = ['aliceblue', 'azure', 'lightcyan', 'floralwhite', 'mintcream'] //creates a color array


for (var i = 0; i < colorArray.length; i++) {
  var newColorBlock = $('<div>'); //creates a new div
  newColorBlock.css('background-color', colorArray[i]); //adds a color to the empty div
  newColorBlock.addClass('colorBlock'); //adds a class to the empty div
  $('#colorBlockContainer').append(newColorBlock); //add div to the dom
}

})//ends doc.ready
