
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vegetables', function (table) {
    table.increments('id').primary()
    table.integer('user_id')
    table.string('vegetables')
    table.integer('quantity')
    table.string('imgURL')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vegetables')
};
