
<!--- Reset the output buffer. --->
<cfcontent type="text/html; charset=utf-8" />

<!doctype html>
<html>
<head>
	<title>Regular Expression Day 2012 (5th Annual!!)</title>

	<!-- Fonts and styles. -->
	<link rel="stylesheet" type="text/css" href="http://fonts.googleapis.com/css?family=Yanone+Kaffeesatz:400,300,200,700"></link>
	<link rel="stylesheet" type="text/css" href="./css/console.css"></link>

	<!-- Libraries and modules. -->
	<script type="text/javascript" src="./js/lib/jquery/jquery-1.7.2.min.js"></script>
	<script type="text/javascript" src="./js/lib/json2.js"></script>
	<script type="text/javascript" src="./js/app.js"></script>
</head>
<body>

	<!-- Define the patterns to be used in the game. -->
	<script id="patternData" type="text/plain">

		Hello
		Hel+o
		(Dog|Cat)
		Ba(na){2}
		Ohm{3,5}
		[aeiou]+
		\W\w\W
		[0-9]
		[\d]{5}
		(o)tt\1
		Gre(e|a)t
		((\w)\2)\1
		boo(?=yaa)ya+
		\w+\b.{2,}
		fun[nk]y
		p(ow)w\1
		M(iss)\1ippi
		\d\d\d
		\D\D\D
		(m(a|ea|ee)t)
		Johnny \d
		\w\s\w
		\w.\w.\w
		ta(s|n)k
		Sweet!!?
		(B)?eat
		on(Click|Submit)
		\\b
		(20)\d{2}
		Mwa(ha)+?
		[RM][Aa][n]
		M(o)o{2}\1
		tush(ie|y)
		\w\w\w\s\d\d\d
		\S\s\S
		[a-z]+[0-9a-z]+
		(try|try not) do
		for-(each|in)
		c[o]{2}kie
		foo( bar)+
		[\[]OMG[\]]
		M(o)(\1|u)se
		Br[ai]c
		[1-3][4-6][07-9]
		(what){2}
		B(oo)h\1
		Free(dom){0,1}
		\d:\d\d(am|pm)
		z((o)\2)mz\1m
		(F|M)ellow
		.\b..\b.
		\boo\b
		(can){2,}?
		[\[\w\]]+
		(?=...bell)cow
		(on)?error
		cold ?fusion
		Java(Script)?
		Buz{3}
		Ca(r|t)
		camp{0}
		Spo(o)\1+n!

	</script>


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

				Time Remaining: <span class="remaining">0:00</span>

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

			<button type="submit" class="skip">
				Skip
			</button>

		</form>

	</div>
	<!-- END: Console View. -->


	<!-- BEGIN: Gave Over View. -->
	<div class="gameOver">
		
		<h1 class="score">
			You Matched <span class="matchCount">0</span> Patterns!
		</h1>

		<p class="rules">
			Please enter your name and email address for a chance to win!
		</p>

		<form class="contactInfo">

			<div class="fields">

				<label>
					Your Name:
				</label>

				<input type="text" name="name" class="name" />

				<label>
					Your Email:
				</label>

				<input type="email" name="email" class="email" />

			</div>

			<div class="actions">

				<button type="submit" class="submit">
					Submit Info
				</button>

				<span class="startOver">
					Or, 
					<a href="##">Play again</a>
				</span>

			</div>

		</form>


	</div>
	<!-- END: Gave Over View. -->

</body>
</html>
