var commands = {
  'What Is This Place': gangplank
};

var fuckCommand = function() {
  $('p#message').html('Opening Fuck Video')
  var win = window.open('https://www.youtube.com/v/26UA578yQ5g?version=3&start=22&end=33&autoplay=1&amp;hl=en_US&amp;rel=0', '_memewindow');
}

var pushIt = function() {
  $('p#message').html('Opening Fuck Video')
  var win = window.open('https://www.youtube.com/v/26UA578yQ5g?version=3&start=22&end=33&autoplay=1&amp;hl=en_US&amp;rel=0', '_memewindow');
}

var stackOverflow = function() {
  $('p#message').text('I am crazy!');
}

var gangplank = function() {
  $('p#message').text('What is Gangplank?')
}

// if (annyang) {
//   // Add our commands to annyang
//   annyang.addCommands(commands);
//
//   // Start listening. You can call this here, or attach this call to an event, button, etc.
//   annyang.start();
// }
