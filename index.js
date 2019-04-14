// turn on stop function 
$('#stopButton').on('click', turnOnStopLight)
function turnOnStopLight() {
  $('#stopLight').css('background-color','red');
  $('#slowLight').css('background-color','black');
  $('#goLight').css('background-color','black');
    // change background color of stop light to red
    // changes background color of green and yellow to black
}

// turn on slow function
$('#slowButton').on('click', turnOnSlowLight)
function turnOnSlowLight() { 
  $('#stopLight').css('background-color','black');
  $('#slowLight').css('background-color','yellow');
  $('#goLight').css('background-color','black');
  // change background color of slow light to yellow
  // changes background color of red and green to black
}

// turn on go function
$('#goButton').on('click', turnOnGoLight)
function turnOnGoLight() {
  $('#stopLight').css('background-color','black');
  $('#slowLight').css('background-color','black');
  $('#goLight').css('background-color','green');
    // change background color of go light to green
    // changes background color of red and yellow to black
}

// set stop light click event

// set slow light click event

// set go light click event

