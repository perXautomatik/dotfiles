;----------------------------------------------------------
;Modified From AutocadTemplate
#SingleInstance, force
SetWorkingDir %A_ScriptDir%
;Menu, Tray, Icon, C:\Program Files\Autodesk\AutoCAD 2020\acad.exe
Return
;----------------------------------------------------------
;https://damassets.autodesk.net/content/dam/autodesk/www/shortcuts/autocad/AutoCAD-Shortcuts-Guide-Autodesk.pdf
;----------------------------------------------------------
#IfWinActive ahk_exe Dress-up Traveller.exe

;ControlKeySwitches

;a
a::
SendInput {Left}
return
;s
s::
SendInput {Down}
return
;d
d::
SendInput {Right}
return
;w
w::
SendInput {Up}
return
;leftMouse
LButton::
SendInput, z
return
;rightMouse
RButton::
sendInput, x
return
;leftMouse
~LControl & LButton::
MouseClick, left
return
;rightMouse
~LControl & RButton::
MouseClick, right
return


;----------------------------------------------------------
;Keys Used
;
;Z
;X
;C
;V
;S
;D
;F
;T
;----------------------------------------------------------

;----------------------------------------------------------
;Timeline
;
;02-18-2019
;added top, alt, and autocad shortcut bars
;added ZoomAll, Save Functs
;added Z, S, HKS
;
;02-20-2019
;fixed zoomall to the words "zoom, all" from "z. a"
;added nonneeded circle, but i wanted to keep things in this script
;put left button wait down for DiameterCircle
;added the save all funct to ctrl+s
;put the three exalters with "z" as exit app
;Added the nonneeded fillet and explode
;added line named "V"ector
;
;02-21-2019
;added delete funct to "d"
;
;02-22-2019
;added + to - for self reasons
;added trim functs to 't'
;
;03-06-2019
;added Alt+f to offset
;got rid off + to - for not working as well as expected.
;----------------------------------------------------------
;atempted toggle macro for use with typhone macro mouse, seems like ahk don't register the mouses combined keys as a actualy keycombo
hotkey, #enter, functionA
return

functionA:
hotkey, #enter, functionB
Run "C:\Users\chris\OneDrive\Desktop\TinyMacroEraseError.exe"
return

functionB:
hotkey, #enter, functionA
Run "C:\Users\chris\OneDrive\Desktop\TinyMacroTypeError.exe"
return


