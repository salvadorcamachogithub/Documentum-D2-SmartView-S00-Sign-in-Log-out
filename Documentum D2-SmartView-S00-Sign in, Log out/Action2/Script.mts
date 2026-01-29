' Log out, Sign out
AIUtil("button", "", micFromTop, 2).Click
' Timing Sign Out Transaction
Services.StartTransaction "Documentum D2-SmartView-S00-02 Sign out"
AIUtil.FindTextBlock("sign out").Click
AIUtil("button", "Sign in").CheckExists True
Services.EndTransaction "Documentum D2-SmartView-S00-02 Sign out"

' Closing Browser
Browser("creationtime:=0").Close
