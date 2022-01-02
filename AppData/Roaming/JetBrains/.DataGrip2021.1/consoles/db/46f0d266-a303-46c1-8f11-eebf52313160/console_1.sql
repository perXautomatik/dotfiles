
update tasks
set subject = rightstr(subject,length(subject)-2)
WHERE created_datetime > datetime()
and instr(subject,"- ") = 1
