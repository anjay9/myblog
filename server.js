const express = require('express');
const path = require('path');

const app = express();
const NODE_ENV = process.env.NODE_ENV;
const PORT = process.env.PORT;

// Static files in production
if (NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => console.log(`Server started on port: ${ PORT }`));
