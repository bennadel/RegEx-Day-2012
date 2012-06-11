
<!--- Param the form posts. --->
<cfparam name="form.name" type="string" default="" />
<cfparam name="form.email" type="string" default="" />
<cfparam name="form.matchCount" type="string" default="" />
<cfparam name="form.gameData" type="string" default="" />


<!--- Email the form data. --->
<!--- .... Process data .... --->


<!--- Stream a response back to the client. --->
<cfcontent 
	type="text/plain; charset=utf-8"
	variable="#toBinary( toBase64( 'success' ) )#"
	/>