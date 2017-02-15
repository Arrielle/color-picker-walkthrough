$(document).ready(function(){ //doc ready start
  console.log('jQuery is ready to go!'); // does my jQuery work?
  var colorArray = ['aliceblue', 'azure', 'lightcyan', 'floralwhite', 'mintcream'] //creates a color array

  for (var i = 0; i < colorArray.length; i++) { //for loop goes through array and adds a div based on the arry color
    var newColorBlock = $('<div>'); //creates a new div
    newColorBlock.css('background-color', colorArray[i]); //adds a color to the empty div
    newColorBlock.addClass('colorBlock'); //adds a class to the empty div
    $('#colorBlockContainer').append(newColorBlock); //add div to the dom
  } // ends for loop

  // Select a random color and add it to the dom
  var randomNumberSelected = randomNumber(0, colorArray.length - 1);
  var randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected to find the color at the correct array index
  //basically the last two lines set a number to a color based on the array index



  console.log(randomNumberSelected);
  console.log(randomColor);

  $('#userColorPrompt').text('Your color is: ' + randomColor);
})//ends doc.ready


function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
