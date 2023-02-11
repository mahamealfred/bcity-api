
const Contact=require("../models/Contact");
class contactController {
    static async addContact(req, res) {
        const {name,surename,email}=req.body
       try {
        const checkEmail=await Contact.findOne({email:email});
        if(checkEmail){
          return res.status(200).json({
            statusCode: 400,
            status:"FAILED",
            message: "Email below is already exist",
          });
        }
       const createdContact= await Contact.create({
          name,
          surename:surename,
          email,
          
        });
        return res.status(200).json({
          statusCode: 200,
          status:"SUCCESS",
          message: "Successfull",
          data: createdContact,
        });
      } catch (error) {
        return res.status(500).json({
          statusCode: 500,
          status:"FAILED",
          message: error.message,
        });
      }
    }

    static async getContacts(req,res){
        try {
    
            const AllContact = await Contact.find().sort({name:1,surename:1});;
           
            if (AllContact) {
            return  res.status(200).json({
                statusCode: 200,
                status:"SUCCESS",
                data: AllContact,
              });
            }
           return res.status(404).json({
              statusCode: 404,
              message: "No data found",
            });
          } catch (error) {
        
           return res.status(500).json({ statusCode: 500,status:"FAILED", message: error.message });
          }
    }
}
module.exports =contactController