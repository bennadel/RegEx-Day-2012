
<cfcomponent
	output="false"
	hint="I define the application settings and event handlers.">


	<!--- Define the application settings. --->
	<cfset this.name = hash( getCurrentTemplatePath() ) />
	<cfset this.applicationTimeout = createTimeSpan( 0, 1, 0, 0 ) />
	<cfset this.sessionManagement = false />

	<!--- Set page request settings. --->
	<cfsetting 
		showdebugoutput="false"
		requesttimeout="10"
		/>


</cfcomponent>