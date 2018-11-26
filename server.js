const app = require('./src/app');

const server = app.listen(8080, '0.0.0.0', () => {
  console.log('Server running on port 8080');
});

process.on('SIGTERM', () => {
  console.log('Caught SIGTERM, shutting down.');
  server.close(() => process.exit(143));
});
