const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//Initiate MongoDB and start server
app.listen(PORT, () => {
    mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/local', { useNewUrlParser: true }).then((response) => {
        console.log(`Connected to MongoDB and server started on PORT ${PORT}`);
    }).catch((err) => {
        console.log(err);
    })
});


const Schema = mongoose.Schema;


const userSchema = new Schema({
  playerId: String,
  firstName: String,
  bestScore: Number
})
const User = mongoose.model('Users', userSchema);

app.post('/api/user', (req, res) => {
  const newUser = new User(req.body);
  newUser.save();
  return res.json(newUser);
})

app.get('/api/users', async (req, res) => {
  const users = await User.find();
  return res.json(users);
})

app.put('/api/user/:id', (req, res) => {
  const id = req.params.id;
  const params = req.body

  User.findOneAndUpdate(
    id,
    params,
    function(err){
          if(err){
            return res.send(err);
          }
        console.log({message:"user updated"});
        }
  )

})
