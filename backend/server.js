const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const usersRoutes = require('./routes/users');
const driversfeedbackRoutes = require('./routes/driversfeedback');
const commutersfeedbackRoutes = require('./routes/commutersfeedback');
const complainsRoutes = require('./routes/complains');
const applicationsRoutes = require('./routes/applications');
const staffbookingRoutes = require('./routes/staffbookings');
const tripbookingsRoutes = require('./routes/tripbookings');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://schoolapp:Themba12345678@cluster0.3rt5wsz.mongodb.net/mdta-test?retryWrites=true&w=majority', { useNewUrlParser: true });
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/users', usersRoutes);
app.use('/driversfeedback', driversfeedbackRoutes);
app.use('/commutersfeedback', commutersfeedbackRoutes);
app.use('/complains', complainsRoutes);
app.use('/tripbookings', tripbookingsRoutes);
app.use('/staffbookings', staffbookingRoutes);
// app.use('/applications', applicationsRoutes);


app.listen(8000, () => {
  console.log('\x1b[36m%s\x1b[0m', 'Connected to MongoDB Database');
  console.log('Server listening on port 8000');
});