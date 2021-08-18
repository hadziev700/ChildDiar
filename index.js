const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const router = require('./routes/index')
require('dotenv').config()
const path = require('path')



const app = express()

app.use(express.static(path.resolve(__dirname,"client","build")))
app.get("*",(req,res) => {
  res.sendFile(path.resolve(__dirname,"client","build","index.html"))
})


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(router)



mongoose.connect(process.env.MONGO,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true  // прописать для добавления
}).then(()=>{
  console.log('Сервер монго...')
});

app.listen(process.env.PORT, ()=>{
  console.log("Сервер запушен")
})