
exports.seed = function(knex, Promise) {
  return knex('vegetables').del()
    .then(function () {
      return Promise.all([
        knex('vegetables').insert({id: 1, user_id: 99901, vegetables: 'onion',  quantity: 4, imgURL: 'https://www.highmowingseeds.com/pub/media/catalog/product/cache/1/image/675x675/e9c3970ab036de70892d86c6d221abfe/2/6/2686.jpg'}),
        knex('vegetables').insert({id: 2, user_id: 99901, vegetables: 'tomato', quantity: 12, imgURL: 'https://cdn.authoritynutrition.com/wp-content/uploads/2015/02/fresh-tomatoes-on-a-wooden-table.jpg'}),
        knex('vegetables').insert({id: 3, user_id: 99903, vegetables: 'chilli',  quantity: 8, imgURL: 'http://i.ndtvimg.com/i/2015-02/chilli-625_625x350_41423486929.jpg'}),
        knex('vegetables').insert({id: 4, user_id: 99903, vegetables: 'chilli',  quantity: 8, imgURL: 'http://i.ndtvimg.com/i/2015-02/chilli-625_625x350_41423486929.jpg'})
      ]);
    });
};
