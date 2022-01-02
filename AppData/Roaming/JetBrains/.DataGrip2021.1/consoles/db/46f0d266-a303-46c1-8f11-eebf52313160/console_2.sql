select tf.*,tasks.* from tasks inner join (select g.name folder,tf2.name list,tf2.local_id  from task_folders tf2
    left outer join groups g on tf2.group_local_id = g.local_id

    ) tf on tf.local_id = tasks.task_folder_local_id