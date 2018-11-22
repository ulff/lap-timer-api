const app = require('./src/app');

const server = app.listen(3000, () => {
  console.log('Server running on port 3000');
});

process.on('SIGTERM', () => {
  console.log('Caught SIGTERM, shutting down.');
  server.close(() => process.exit(143));
});
