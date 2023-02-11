const  mongoose = require('mongoose');

const ClientSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:20,
        // unique:false
    },
    clientCode:{
        type:String,
        required:true,
        unique:true
    }, 
    linkedContacts:{
        type:Array,
        default:[],
    } 
},
{timestamps:true}
);
module.exports=mongoose.model("Client",ClientSchema);