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
  const userToUpdate = User.findById(req.body.id);
  console.log(req.body.id)
  console.log(userToUpdate);
  // User.findByIdAndUpdate(req.body.id);
})

// // Delete a todo
// app.delete('/api/todos', async (req, res, next) => {
//   // find todo by id and delete
//   await Todo.findByIdAndDelete(req.body.id);                   

//   return res.json({
//       message: 'Todo deleted successfully',
//       success: true,
//   });
// });