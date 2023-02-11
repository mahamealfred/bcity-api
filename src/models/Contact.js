const  mongoose = require('mongoose');

const ContactSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,
        min:2,
        max:20,
    },
    surename:{
        type:String,
        required:true
    },
    email: {
        type: String,
        required: [true, "Please add an email"],
        unique: true,
        match: [
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
          "Please add a valid email",
        ],
      },
      linkedClients:{
        type:Array,
        default:[],
    } 
    
},
{timestamps:true}
);
module.exports=mongoose.model("Contact",ContactSchema);