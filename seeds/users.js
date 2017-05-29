exports.seed = function (knex, Promise) {
  return knex('users').del()
    .then(function () {
      return Promise.all([
        knex('users').insert({id: 99901, name: 'Bernie Sanders', email: 'bernie.sanders@gmail.com'}),
        knex('users').insert({id: 99902, name: 'Michelle Obama', email: 'michelle.obama@flotus.com'}),
        knex('users').insert({id: 99903, name: 'Donald Trump', email: 'donald.trump@potus.com'}),
        knex('users').insert({id: 99904, name: 'Bill OReilly', email: 'theoreillyfactor@foxnews.com'})
      ]);
    });
};
