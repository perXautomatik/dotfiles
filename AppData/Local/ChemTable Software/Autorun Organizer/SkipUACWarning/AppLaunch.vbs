IF WSH.Arguments.Count > 0 THEN 
Function QuoteStr(str)
QuoteStr = Chr(34) & str & Chr(34)
End Function
Argslist = ""
With WScript.Arguments
For x=0 To WScript.Arguments.Count - 1
Argslist = Argslist & " " & QuoteStr(WScript.Arguments(x))
Next
End With
Set Shell = CreateObject("WScript.Shell")
Shell.Run """C:\Program Files\Autorun Organizer\AutorunOrganizer.exe"""&Trim(Argslist), 1
ELSE
Set Shell = CreateObject("WScript.Shell")
Shell.Run """schtasks.exe"" /run /TN ""Autorun Organizer UAC Warning Skip""", 0
END IF
