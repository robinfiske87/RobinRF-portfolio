const express = require('express');


const app = express();
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder(public folder)
  app.use(express.static('client/build'));

  // Loads the static index.html file on all request not going to our defined apis
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
  });
}


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port);


app.listen(process.env.PORT);