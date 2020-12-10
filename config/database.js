module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', 'mysqlserver.cbk9iohujoap.sa-east-1.rds.amazonaws.com'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'api'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', 'jads1974'),
        ssl: env.bool('DATABASE_SSL', true),
      },
      options: {}
    },
  },
});
