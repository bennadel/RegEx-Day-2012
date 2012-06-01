
// When the page has loaded, run the application.
$(function(){

	
	// Define the intro controller.
	var introController = (function( target ){

		// Find and cache the DOM elements we'll need in this view.
		var dom = {};
		dom.target = target;
		dom.document = $( document );
		dom.startButton = target.find( "a.startPlaying" );

		// Bind to the start button.
		dom.startButton.click(
			function( event ){

				// Cancel click event - not a real link.
				event.preventDefault();

				// Announce event to the app.
				dom.document.trigger( "startPlaying" );

			}
		);


		// Return the controller interface.
		return({

			// I hide the view.
			hide: function(){

				// Hide the view.
				dom.target.hide();

			},

			// I show the view associated with this controller.
			render: function(){

				// Show the view.
				dom.target.show();

			}

		});


	})( $( "div.introduction" ) );



	// Define the console controller.
	var consoleController = (function( target ){


		// I finish the current game (either because time ran out or because the user
		// has matched all of the available patterns.
		function endGame(){
			
			// Stop the current game play.
			stopGame();

			// Announce the game end event with the matches that the user made.
			dom.document.trigger( "endGame", [ matches ] );

		}

		// I display the pattern at the current index.
		function showCurrentPattern(){

			dom.currentPattern.text( 
				patterns[ currentPatternIndex ] 
			);

		}

		// I shuffle the patterns randomly so they start on a new one (or rather,
		// a random one) when the game starts.
		function shufflePatterns(){

			// Shuffle a number of times.
			for (var i = 0 ; i < 100 ; i++){

				// Shuffle the patterns randomly.
				patterns.sort(
					function(){
						return( (Math.random() > .5) ? 1 : -1 );
					}
				);

			}

		}

		// I start the game play for the view.
		function startGame(){

			// Reset the matches that the user has made.
			matches = [];

			// Update the match count.
			updateMatchCount();
			
			// Shuffle the pattern for a fresh start.
			shufflePatterns();

			// Reset the currently selected index.
			currentPatternIndex = 0;

			// Show first pattern.
			showCurrentPattern();

			// Start the game timer.
			startTimer();

			// Reset and Focus the input form.
			dom.input.val( "" ).focus();

		}

		// I start the game over.
		function startGameOver(){
			
			// Stop the current game.
			stopGame();

			// Start it again.
			startGame();

		}

		// I start the time for the game.
		function startTimer(){

			// Define the start time as now.
			startTime = new Date();

			// Start an interval to update the time.
			timer = setInterval( updateTimeRemaining, 100 );

		}

		// I stop the current game.
		function stopGame(){

			// Kill the timer.
			clearInterval( timer );

		}

		// I handle the submission of the input form.
		function submitInput( inputText ){

			// Get the current pattern.
			var currentPattern = patterns[ currentPatternIndex ];

			// Create a case-insensitive regular expression.
			var regex = new RegExp( ("^" + currentPattern + "$"), "i" );

			// Check to see if the pattern will match the given text.
			if (regex.test( inputText )){

				// Store the current match success.
				matches.push({
					pattern: currentPattern,
					input: inputText
				});

				// Update the match count.
				updateMatchCount();

			}

			// Increment the pattner index.
			currentPatternIndex++;

			// Check to see if we have run out of patterns.
			if (currentPatternIndex >= patterns.length){

				// We ran out of patterns - the game must be finished.
				endGame();

			} else {

				// We have more patterns, update the view.
				showCurrentPattern();

				// Reset the form.
				dom.input.val( "" ).focus();

			}

		}

		// I update the match count.
		function updateMatchCount(){

			dom.matchCount.text( matches.length );

		}

		// I update the time remaining.
		function updateTimeRemaining(){

			// Get the current time.
			var currentTime = new Date();

			// Get the different in time since the start.
			var timeDifference = (currentTime - startTime);

			// Check to see if the game has exceeded the time.
			if (timeDifference >= gameDuration){

				// End the current game play.
				endGame();

			} else {

				// Get the time remaining (in seconds).
				var timeRemaining = Math.floor( (gameDuration - timeDifference) / 1000 );

				// Get the minutes and seconds left.
				var minutes = Math.floor( timeRemaining / 60 );
				var seconds = (timeRemaining % 60);

				// Update the actual display.
				dom.remaining.text( 
					minutes + 
					":" + 
					((seconds > 9) ? seconds : "0" + seconds)
				);

			}

		}


		// Find and cache the DOM elements we'll need in this view.
		var dom = {};
		dom.target = target;
		dom.document = $( document );
		dom.patternData = $( "#patternData" );
		dom.timer = target.find( "div.headsup div.timer" );
		dom.remaining = dom.timer.find( "span.remaining" );
		dom.startOver = dom.timer.find( "span.reset a" );
		dom.score = target.find( "div.score" );
		dom.matchCount = dom.score.find( "span.matchCount" );
		dom.currentPattern = target.find( "div.currentPattern" );
		dom.pattern = dom.currentPattern.find( "span.patterns" );
		dom.controls = target.find( "form.controls" );
		dom.input = dom.controls.find( "input.input" );
		dom.submit = dom.controls.find( "button.submit" );
		dom.skip = dom.controls.find( "button.skip" );


		// Get the pattern data and break it up in a list of patterns.
		var patterns = dom.patternData.html()
			.replace( /^\s+|\s+$/gi , "" )
			.split( /[\t\r\n]+/gi )
		;

		// Keep track of the current pattern.
		var currentPatternIndex = 0;

		// I keep track of the start time of the game.
		var startTime = null;

		// I keep track of the timer used to update the time display.
		var timer = null;

		// I define the duration of the game (in milliseconds).
		var gameDuration = (60 * 1000);

		// Keep track of the matches that the user made.
		var matches = [];


		// Listen for the form submission - this is the user guessing a match.
		dom.controls.submit(
			function( event ){

				// Cancel the default event - not a real form submission.
				event.preventDefault();

				// Get the user's input and clean it.
				var input = dom.input.val().replace( /^\s+|\s+$/g, "" );

				// Submit the input for evaluation.
				submitInput( input );

			}
		);

		// Listen for the start-over event.
		dom.startOver.click(
			function( event ){

				 // Prevent default behavior - not a real link.
				 event.preventDefault();

				 // Start the game over.
				 startGameOver();

			}
		);


		// Return the controller interface.
		return({

			// I hide the view.
			hide: function(){

				// Hide the view.
				dom.target.hide();

				// Make sure game is stopped.
				stopGame();

			},

			// I show the view associated with this controller.
			render: function(){

				// Show the view.
				dom.target.show();

				// Start the game.
				startGame();

			}

		});

	})( $( "div.console" ) );



	// Define the game-over controller.
	var gameOverController = (function( target ){

		// I submit the contact info.
		function submitContactInfo(){

			// Make sure both fields have data.
			if (
				!dom.name.val() ||
				!( /^[^@]+@.+$/i ).test( dom.email.val() )
				){

				alert( "Please enter your name and email." );

				// Stop processing the request.
				return;

			}

			// Submit the contact information.
			var submission = $.ajax({
				type: "post",
				url: "./submit.cfm",
				data: {
					name: dom.name.val(),
					email: dom.email.val(),
					matchCount: gameData.length,
					gameData: JSON.stringify( gameData )
				}
			});

			// When the form has been submitted, liste for success.
			submission.done(
				function(){

					// Thank the user.
					alert( "Thanks again for playing!" );

					// Announce a need to start over.
					dom.document.trigger( "contactInfoSubmitted" );

				}
			);

			// If something went wrong, let the user know.
			submission.fail(
				function(){
					alert( "Ooops, something went wrong with the submission." );
				}
			);

		}

		// Find and cache the DOM elements we'll need in this view.
		var dom = {};
		dom.target = target;
		dom.document = $( document );
		dom.score = target.find( "h1.score" );
		dom.matchCount = dom.score.find( "span.matchCount" );
		dom.form = target.find( "form.contactInfo" );
		dom.name = dom.form.find( "input.name" );
		dom.email = dom.form.find( "input.email" );
		dom.startOver = dom.form.find( "span.startOver a" );

		// The game data will contain a collection of matches that the 
		// user made during the gameplay. This will be sent back to the
		// server along with the contact information.
		var gameData = [];


		// Listen for the submit event.
		dom.form.submit(
			function( event ){

				// Prevent the default event - not a normal form submission.
				event.preventDefault();

				// Submit the contact info via AJAX.
				submitContactInfo();

			}
		);

		// Liste for the play again event.
		dom.startOver.click(
			function( event ){

				// Prevent the default event - not a real link.
				event.preventDefault();

				// Announce start over event.
				dom.document.trigger( "playAgain" );

			}
		);


		// Return the controller interface.
		return({
			
			// I hide the view.
			hide: function(){

				// Hide the view.
				dom.target.hide();

			},

			// I show the view associated with this controller.
			render: function( currentGameData ){

				// Store the current game data.
				gameData = currentGameData;

				// Update the matches.
				dom.matchCount.text( gameData.length );

				// Show the view.
				dom.target.show();

				// Focus the input. Don't reset the input as this might not
				// be the user's first time playing.
				dom.name.focus();

			}

		});

	})( $( "div.gameOver" ) );


	// ------------------------------------------------------ //
	// ------------------------------------------------------ //


	// Initialize the interface.
	introController.render();
	consoleController.hide();
	gameOverController.hide();

	// Get our event beacon (the document). This is the means of communication
	// that the modules will use to talk to the app.
	var events = $( document );


	// Bind to the start-playing event.
	events.on( 
		"startPlaying",
		function( event ){

			// Flip the game play.
			introController.hide();
			consoleController.render();
			gameOverController.hide();

		}
	);

	// Bind to the end-game event (when the user is done playing.)
	events.on(
		"endGame",
		function( event, matches ){

			// Show the end view.
			introController.hide();
			consoleController.hide();
			gameOverController.render( matches );

		}
	);

	// Bind to the final event of the workflow - the user has submitted their info.
	events.on(
		"contactInfoSubmitted playAgain",
		function(){

			// Go back to the start page.
			introController.render();
			consoleController.hide();
			gameOverController.hide();

		}
	);


});
