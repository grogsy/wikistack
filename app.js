const express = require('express');
const app = express();
const { db, Page, User } = require('./models');
const morgan = require('morgan');
const wiki = require('./routes/wiki')
const user = require('./routes/user')

db.authenticate().
then(() => {
  console.log('connected to the database');
})
app.use('/wiki', wiki);
app.use('/user', user);

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
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

