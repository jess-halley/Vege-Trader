// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'sqlite3',
    connection: {
      filename: ':memory:'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'postgresql',
    connection: "postgres://napraewlbvpqlt:08a16a76d514af1ba8db85f23c2f54e6f58a6c9bd3351146b659b36ad36472d2@ec2-184-73-236-170.compute-1.amazonaws.com:5432/d1tak7uur2okmj",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
