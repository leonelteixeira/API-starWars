import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://leonel:12345678%40@cluster0.dn6vtvk.mongodb.net/?retryWrites=true&w=majority').then(() =>
  console.log('📦 Sucessfully connected with database')
)
