const express = require('express');

// database things
const { db, Page, User } = require('./models');

// middleware
const morgan = require('morgan');
const wiki = require('./routes/wiki')
const user = require('./routes/user')

const app = express();

db.authenticate().
then(() => {
  console.log('connected to the database');
})

app.use(express.urlencoded( { extended: false })); //for doing post, it has to look exactly like this. has to come before declaring route
app.use('/wiki', wiki);
app.use('/user', user);
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res, next) => {
    res.redirect('/wiki');
})

const PORT = 1333;

const syncedDB = async ()=> {
    await Page.sync();
    await User.sync();
}

syncedDB();

app.listen(PORT, () => {
    console.log(`App listening in port ${PORT}`)
})

