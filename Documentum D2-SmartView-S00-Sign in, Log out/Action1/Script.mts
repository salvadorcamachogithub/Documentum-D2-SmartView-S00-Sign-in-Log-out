' Launch the specified browser: "chrome.exe", "iexplore.exe", "msedge.exe", etc.
SystemUtil.Run DataTable("p_browser", dtGlobalSheet)

' Set the browser as the AI context for AI-based operations
AIUtil.SetContext Browser("creationtime:=0")

' Navigate to the desired URL
Browser("creationtime:=0").Navigate DataTable("p_url", dtGlobalSheet)

' Sometimes you need to select Repository and Application
If AIUtil("down_triangle").Exist(3) Then
	AIUtil("down_triangle").Click
	AIUtil.FindTextBlock("ePersonnel Files", micFromBottom, 1).Click
	AIUtil("button", "sign in").Click
End If

' Sign in
AIUtil("text_box", "User name").Type DataTable("p_username", dtGlobalSheet)
AIUtil("text_box", "Password").TypeSecure DataTable("p_password", dtGlobalSheet)

' Timing Sign In Transaction
Services.StartTransaction "Documentum D2-SmartView-S00-01 Sign In"
AIUtil("button", "Sign in").Click
' Validation
AIUtil.FindTextBlock("Favorites").CheckExists True
Services.EndTransaction "Documentum D2-SmartView-S00-01 Sign In"
