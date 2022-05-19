exports.seed = function (knex) {
    return knex('projects').insert([
      {
        project_name: 'My awesome project',
        project_description: 'This project is awesome',
        project_completed: 0
      },
      {
        project_name: 'My awesome project',
        project_description: 'This project is awesome',
        project_completed: 0
      },
      {
        project_name: 'My awesome project',
        project_description: 'This project is awesome',
        project_completed: 0
      },
      {
        project_name: 'My awesome project',
        project_description: 'This project is awesome',
        project_completed: 0
      }
    ])
  }