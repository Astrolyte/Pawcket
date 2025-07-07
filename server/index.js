const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors=require('cors')
const auth = require('./routes/auth');

dotenv.config();
const app = express();

app.use(express.json())
//app.use(cors())

//routes
app.use('/api/auth', auth);
// console.log(process.env.MONGODB_URI);
mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Server listening on port ${process.env.PORT || 3000}...`);
    });
  })
  .catch((err) => console.log("Error in connection to MongoDB:", err));