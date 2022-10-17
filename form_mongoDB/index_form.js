const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = require('express')();
//additinoals
var formidable = require('express-formidable');
var cors = require('cors')

//additionals #2
app.use(cors());
app.use(formidable())

// connect to Mongo daemon
mongoose
  .connect(
    'mongodb://localhost:27017/',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// DB schema
const ItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: String,
  message: String,
  date: {
    type: Date,
    default: Date.now
  }
});

Item = mongoose.model('item', ItemSchema);
//app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }));

/*
app.get('/', (req, res) =>{
    res.render("index");   
})

app.get("/", (req, res) => {
  Item.find((err, items) => {
    if (err) throw err;
    res.render("index", { items });
  });
});
*/

//Post route
app.post('/index_form', (req, res) => {
  const newItem = new Item({
    name: req.fields.name,
    email: req.fields._replyto,
    message: req.fields.message

  });

  newItem.save().then(item => console.log(item));
  res.json({success : true});
});
/*
app.get("/", (req, res) => {
  Item.find((err, items) => {
    if (err) throw err;
    res.render("index", { items });
  });
});
*/

//Additionals for Form
/*
app.post('/index_form', function (req, res) {
  //console.log(req.body);
  console.log(req.fields);
  res.json({success : true});
});
*/

const port = 8080;
app.listen(port, () => console.log('Server running...'));

