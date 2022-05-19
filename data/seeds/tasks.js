exports.seed = function (knex) {
    return knex('tasks').insert([
      {
        task_description: 'This is a TASK description',
        task_notes: 'These are task notes',
        task_completed: false,
        project_id: 1
      },
      {
        task_description: 'This is a TASK description',
        task_notes: 'These are task notes',
        task_completed: false,
        project_id: 2
      },
      {
        task_description: 'This is a TASK description',
        task_notes: 'These are task notes',
        task_completed: false,
        project_id: 3
      },
      {
        task_description: 'This is a TASK description',
        task_notes: 'These are task notes',
        task_completed: false,
        project_id: 3
      }
  
    ])
  }