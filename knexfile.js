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
    connection: "postgres://dpxocmmlxkznrp:f7ad3d9db052ff4eff131e7bf19a9c7b2f1187cee2c830f4bac91161eeb30e8d@ec2-50-19-83-146.compute-1.amazonaws.com:5432/d2c1clh63ige99",
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
