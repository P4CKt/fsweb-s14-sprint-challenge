/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("projects", (tbl) => {
      tbl.increments("project_id");
      tbl.string("project_name").notNullable();
      tbl.string("project_description");
      tbl.boolean("project_completed").defaultTo(false);
    })
    .createTable("resource", (tbl) => {
      tbl.increments("resource_id");
      tbl.string("resource_name").notNullable().unique();
      tbl.string("resource_description");
    })
    .createTable("task", (tbl) => {
      tbl.increments("task_id");
      tbl.string("task_description").notNullable();
      tbl.string("task_notes");
      tbl.boolean("task_completed").defaultTo(false);
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    })
    .createTable("project_resources", (tbl) => {
      tbl.increments("project_resources_id");
      tbl
        .integer("project_id")
        .unsigned()
        .notNullable()
        .references("project_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("task_id")
        .unsigned()
        .notNullable()
        .references("task_id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("project_resources")
    .dropTableIfExists("task")
    .dropTableIfExists("resource")
    .dropTableIfExists("projects");
};
