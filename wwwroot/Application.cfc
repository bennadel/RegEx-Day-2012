
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


	<cffunction 
		name="onError"
		access="public"
		returntype="boolean"
		output="true"
		hint="I handle any errors that have bubbled up through the application.">

		<!--- Define arguments. --->
		<cfargument
			name="error"
			type="any"
			required="true"
			hint="I am the error object / exception."
			/>

		<p>
			Oops, something went wrong.
		</p>

		<!--- Stop any further processing. --->
		<cfabort />

		<!--- Return True to override the error condition. --->
		<cfreturn true />

	</cffunction>


</cfcomponent>
