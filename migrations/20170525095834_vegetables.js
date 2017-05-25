
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vegetables', function (table) {
    table.increments('id').primary()
    table.int('user_id')
    table.string('vegetables')
    table.string('quantity')
    table.string('imgURL')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vegetables')
};
