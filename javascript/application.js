    "use strict";

    // first we make sure annyang started succesfully
    if (annyang) {

      // define the functions our commands will run.
      var hello = function() {
        $("p#message").text("Hello David");
      }

      var helloFucker = function() {
        $("p#message").text("Fuck you David");
      }

      var gangplank = function() {
        setVideo('rAaWvVFERVA', '105', '132');
      }
      var overNineThousand = function() {
        setVideo('SiMHTK15Pik', '9', '14');
      }

      var DMX = function() {
        setVideo('ThlhSnRk21E', '33', '35');
      }
      var lobby = function() {
        setVideo('YXE3Ku-mGrk', '15', '20');
      }
      var notSilly = function() {
        setVideo('iV2ViNJFZC8', '120', '129');
      }
      var allYourBase = function() {
        setVideo('nJNM377JlIg', '21', '25');
      }

      var cleanUp = function() {
        setVideo('PJhXVg2QisM', '1', '23');
      }
      var test = function() {
        setVideo('er416Ad3R1g', '168', '172');
      }
      var wonka = function() {
        setVideo('rRz6h9Ey9rE', '135', '140');
      }
      var mordor = function() {
        setVideo('rRz6h9Ey9rE', '225', '230');
      }
      var justDoIt = function() {
        setVideo('ZXsQAXx_ao0', '5', '8');
      }
      var dreamsBeDreams = function() {
        setVideo('ZXsQAXx_ao0', '8', '11');
      }
      var pushIt = function() {
        setVideo('vCadcBR95oU', '110', '112');
      }

      var setVideo = function(id, startTime, stopTime) {
        $('body').html('<iframe width="960" height="720" src="https://www.youtube.com/v/' + id + '?version=3&start=' + startTime + '&end=' + stopTime + '&autoplay=1&amp;hl=en_US&amp;rel=0" frameborder="0" allowfullscreen></iframe>');
        setTimeout(function() {
          $('body').html('');
        }, ((stopTime - startTime) * 1000) + 2300);
      }



      // define our commands.
      // * The key is the phrase you want your users to say.
      // * The value is the action to do.
      //   You can pass a function, a function name (as a string), or write your function as part of the commands object.
      var commands = {
        'hello computer':        hello,
        'hello bitch':          helloFucker,
        'what is this place':   gangplank,
        'what is gangplank':   gangplank,
        'over nine thousand':   overNineThousand,
        'over 9000':   overNineThousand,
        "it's over 9000":   overNineThousand,
        "what does his power level say":   overNineThousand,
        "what is his power level say":   overNineThousand,
        "Vegeta what is his power level say":   overNineThousand,
        "Vegeta what does the scouter say":   overNineThousand,
        "Vegeta vs power level say":   overNineThousand,
        "Vegeta what is the power level say":   overNineThousand,
        "Vegeta what is the power level say":   overNineThousand,
        "what is his power level":   overNineThousand,
        'DMX': DMX,
        'this place is a mess': cleanUp,
        'clean up': cleanUp,
        'run a test': test,
        'running test': test,
        "where's the lobby": lobby,
        "not particularly silly": notSilly,
        "not very silly": notSilly,
        "not silly enough": notSilly,
        "not silly": notSilly,
        "with government backing": notSilly,
        "all your base": allYourBase,
        "all your base are belong to us": allYourBase,
        "what does it do": wonka,
        "one does not simply": mordor,
        "just do it": justDoIt,
        "don't let your dreams be dreams": justDoIt,
        "push it": pushIt,
      };

      // OPTIONAL: activate debug mode for detailed logging in the console
      annyang.debug();

      // Add voice commands to respond to
      annyang.addCommands(commands);

      // OPTIONAL: Set a language for speech recognition (defaults to English)
      // For a full list of language codes, see the documentation:
      // https://github.com/TalAter/annyang/blob/master/docs/README.md#languages
      annyang.setLanguage('en');

      // Start listening. You can call this here, or attach this call to an event, button, etc.
      annyang.start();
    }
