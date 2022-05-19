exports.seed = function (knex) {
    return knex('resources').insert([
      {
        resource_name: 'My awesome RESOURCE 1',
        resource_description: 'This RESOURCE is awesome',
      },
      {
        resource_name: 'My awesome RESOURCE 2',
        resource_description: 'This RESOURCE is awesome',
      },
      {
        resource_name: 'My awesome RESOURCE 3',
        resource_description: 'This RESOURCE is awesome',
      },
      {
        resource_name: 'My awesome RESOURCE 4',
        resource_description: 'This RESOURCE is awesome',
      }
  
    ])
  }