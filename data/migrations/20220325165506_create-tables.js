/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl => {
        tbl.increments('project_id')
        tbl.text('project_name').notNullable()
        tbl.text('project_description')
        tbl.boolean('project_completed').defaultTo(false);
    })
    .createTable('tasks', tbl => {
      tbl.increments('task_id')
      tbl.text('task_description').notNullable()
      tbl.text('task_notes')
      tbl.boolean('task_completed').defaultTo(false);
      tbl.text('project_id').notNullable();
    })
    .createTable('resources', tbl => {
        tbl.increments('resource_id')
        tbl.text('resource_name').unique().notNullable()
        tbl.text('resource_description')
    })
  };
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('tasks')
    .dropTableIfExists('projects')
    .dropTableIfExists('resources')
  };