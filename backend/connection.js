require('dotenv').config();

const mongoose= require('mongoose');
const connectionStr = `mongodb+srv://mnicoledv:master1234@matchbook.xdq4rw6.mongodb.net/matchbook?retryWrites=true&w=majority`;

mongoose.connect(connectionStr, {useNewUrlParser: true, useUnifiedTopology:true})
.then(() => console.log('connected to mongodb'))
.catch(err => console.log(err));

mongoose.connection.on('error', err => {
    console.log(err)
})
