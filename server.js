const mongoose = require('mongoose');
const app = require('./app');

mongoose
  .connect(
    'mongodb+srv://backendpro:12334455@@cluster-backend-attainu.6rqij.mongodb.net/usersData?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('Database connected!'))
  .catch((err) => {
    console.log('ERROR!!! ', err.message);
  });

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Everything seems connected at localhost:${PORT}`);
});
