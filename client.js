var colorArray = ['aliceblue', 'azure', 'lightcyan', 'floralwhite', 'mintcream', 'cornsilk', 'white', 'gainsboro'] //creates a color array
var randomColor = '';

var numberOfColors = 4;


$(document).ready(function(){ //doc ready start
  console.log('jQuery is ready to go!'); // does my jQuery work?

  addColorBlocksToPage();

  $('#colorBlockContainer').on('click', '.colorBlock', function(){ //looks for clicks on class colorBlock within colorBlockContainer
    //console.log('$(this).data().color is: ', $(this).data().colorOfBlock); //this.data is referencing the div object

    var colorOfBlockSelected = $(this).data().colorOfBlock;
    if(colorOfBlockSelected == randomColor){
      $('#successFail').text('YOU GOT IT!');

    } else {
      $('#successFail').text('OH NO... THAT\S NOT RIGHT');
    }//END IF ELSE
  });//END ON CLICK

  $('#addColorButton').on('click', function(){
    if (numberOfColors < colorArray.length){
    numberOfColors++;
    $('#colorBlockContainer').empty();
    addColorBlocksToPage();
  }
  });

  $('#removeColorButton').on('click', function(){
    numberOfColors--;
    $('#colorBlockContainer').empty();
    addColorBlocksToPage();
  });

})//ends doc.ready


function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function chooseNewRandomColor(){
  // Select a random color and add it to the dom
  var randomNumberSelected = randomNumber(0, numberOfColors - 1);
  randomColor = colorArray[randomNumberSelected]; // uses randomNumberSelected to find the color at the correct array index
  //basically the last two lines set a number to a color based on the array index
  $('#userColorPrompt').text('Your color is: ' + randomColor);
}

function addColorBlocksToPage(){
  for (var i = 0; i < numberOfColors; i++) { //for loop goes through array and adds a div based on the arry color
    var newColorBlock = $('<div>'); //creates a new div
    newColorBlock.css('background-color', colorArray[i]); //adds a color to the empty div
    newColorBlock.addClass('colorBlock'); //adds a class to the empty div
    newColorBlock.data('colorOfBlock', colorArray[i]);//this adds a key and value to the div on the DOM
    $('#colorBlockContainer').append(newColorBlock); //add div to the dom
    chooseNewRandomColor();
  }
}// ends for loop
