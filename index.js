import mongoose from "mongoose";

const db = mongoose.connection
// connecting, connected, disconnected, error
db.on('connecting', () => {
    console.log('ok conectando <🎇'); 
});
db.on('connected', () => {
    console.log('ok conectado <😊');  
});
db.on('disconnected', () => {
    console.log('ok desconectado <🎨');  
});
db.on('error', () => {
    console.log('ok conexion <🎃');
});

//mongoose.connect('mongodb://192.168.0.6:27017/test')
mongoose.connect('mongodb://localhost:27017/test')