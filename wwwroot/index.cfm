
<!doctype html>
<html>
<head>
	<title>Regular Expression Day 2012 (5th Annual!!)</title>
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300,200,700"></link>
	<link rel="stylesheet" type="text/css" href="./css/console.css"></link>
	<script type="text/javascript" src="./js/lib/jquery/jquery-1.7.2.min.js"></script>
</head>
<body>

	<!-- BEGIN: Introduction View. -->
	<div class="introduction">

		<h1>
			Welcome to RegEx Day 2012
		</h1> 

		<p class="subHeader">
			The 5th Annual Regular Expression Day
		</p>

		<h2>
			Play For A Chance To Win!
		</h2>

		<p class="goal">
			The goal of the game is to match as many Regular Expression patterns
			as you can in the time alotted. For each pattern, you have to supply
			a String that would be matched by the given pattern.
		</p>

		<a href="##" class="startPlaying">
			Start Playing
		</a>

	</div>
	<!-- END: Introduction View. -->


	<!-- BEGIN: Console View. -->
	<div class="console">

		<div class="headsup">

			<div class="timer">

				Time Remaining: <span class="remaining">2:00</span>

				<span class="reset">
					( <a href="##">Start Over</a> )
				</span>

			</div>

			<div class="score">

				<span class="matchCount">0</span>

				Matches

			</div>

		</div>

		<div class="currentPattern">

			<span class="boundary">^</span>
			<span class="pattern">(Cat|Dog)</span>
			<span class="boundary">$</span>
			
		</div>

		<form class="controls">

			<input type="text" name="input" autocomplete="off" class="input" />

			<button type="submit" class="submit">
				<strong>Submit Answer</strong><br />
				( Hit Enter Key )
			</button>

			<button class="skip">
				Skip
			</button>

		</form>

	</div>
	<!-- END: Console View. -->


	<!-- BEGIN: Gave Over View. -->
	<div class="gameOver">
		Thanks for playing!
	</div>
	<!-- END: Gave Over View. -->

</body>
</html>