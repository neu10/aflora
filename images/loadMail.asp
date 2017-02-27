<%
	' Open the designated file and return the text.
	
	on error resume next 
	set fso			= createobject("scripting.filesystemobject")
	set act			= fso.opentextfile(server.mappath(sMailFile))

	do while act.AtEndOfStream = false 
		fileLine	= fileLine + act.readline()
	loop			
	act.close()	
	response.Write(fileLine)	
%>