const app = require('./app');

const HOST = '127.0.0.1';
const PORT = 3028;

const server = app.listen(PORT, HOST, () => {
  console.log(`Server is running; host [${server.address().address}]; port [${server.address().port}]`);
});
