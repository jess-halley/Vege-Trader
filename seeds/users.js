exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 99901, name: 'Jon Snow', email: 'lordcommander@nightswatch.org', vegetables: 'onion', quantity: 4, imgURL: 'https://www.highmowingseeds.com/pub/media/catalog/product/cache/1/image/675x675/e9c3970ab036de70892d86c6d221abfe/2/6/2686.jpg'}),
        knex('users').insert({id: 99902, name: 'Bamboozled Baboon', email: 'baboon@example.org', vegetables: 'tomato', quantity: 12, imgURL: 'https://cdn.authoritynutrition.com/wp-content/uploads/2015/02/fresh-tomatoes-on-a-wooden-table.jpg'}),
        knex('users').insert({id: 99903, name: 'Curious Capybara', email: 'capybara@example.org', vegetables: 'chilli', quantity: 8, imgURL: 'http://i.ndtvimg.com/i/2015-02/chilli-625_625x350_41423486929.jpg'})
      ]);
    });
};
