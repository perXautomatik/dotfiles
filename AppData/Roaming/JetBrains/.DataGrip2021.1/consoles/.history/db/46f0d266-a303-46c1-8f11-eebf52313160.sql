SELECT t.*
FROM tasks t
WHERE created_datetime > datetime()
and instr("- ",subject) > 0;
;-- -. . -..- - / . -. - .-. -.--
SELECT t.*
FROM tasks t
WHERE created_datetime > datetime()
and instr(subject,"- ") > 0;
;-- -. . -..- - / . -. - .-. -.--
SELECT t.*
FROM tasks t
WHERE created_datetime > datetime()
and instr(subject,"- ") = 1;
;-- -. . -..- - / . -. - .-. -.--
SELECT rightstr(subject,length(subject)-2)
FROM tasks t
WHERE created_datetime > datetime()
and instr(subject,"- ") = 1;
;-- -. . -..- - / . -. - .-. -.--
update tasks
set subject = rightstr(subject,length(subject)-2)
WHERE created_datetime > datetime()
and instr(subject,"- ") = 1;
;-- -. . -..- - / . -. - .-. -.--
select * from tasks inner join (select local_id, name from task_folders) tf on tf.local_id = tasks.task_folder_local_id;
;-- -. . -..- - / . -. - .-. -.--
select * from tasks inner join (select local_id, name Folder from task_folders) tf on tf.local_id = tasks.task_folder_local_id;
;-- -. . -..- - / . -. - .-. -.--
select * from tasks inner join (select tf2.local_id, tf2.name list,g.name folder from task_folders tf2
    left outer join groups g on tf2.group_local_id = g.local_id

    ) tf on tf.local_id = tasks.task_folder_local_id;
;-- -. . -..- - / . -. - .-. -.--
select tf.*,tasks.* from tasks inner join (select tf2.local_id, tf2.name list,g.name folder from task_folders tf2
    left outer join groups g on tf2.group_local_id = g.local_id

    ) tf on tf.local_id = tasks.task_folder_local_id;
;-- -. . -..- - / . -. - .-. -.--
select tf.*,tasks.* from tasks inner join (select tf2.name folder,g.name list,tf2.local_id  from task_folders tf2
    left outer join groups g on tf2.group_local_id = g.local_id

    ) tf on tf.local_id = tasks.task_folder_local_id;
;-- -. . -..- - / . -. - .-. -.--
select tf.*,tasks.* from tasks inner join (select g.name folder,tf2.name list,tf2.local_id  from task_folders tf2
    left outer join groups g on tf2.group_local_id = g.local_id

    ) tf on tf.local_id = tasks.task_folder_local_id;