const { model } = require("mongoose");
const generateClientCode=require("../helpers/clientCodeGenerator")
const Client=require("../models/Client");
const Contact=require("../models/Contact");
class clientController {
    static async createClient(req, res) {
        const {name}=req.body
        const AllClient = await Client.count();
       const rndInt = ("00" + AllClient).slice(-3)
       const clientCode= generateClientCode(name,rndInt)

       try {
       const client= await Client.create({
          name,
          clientCode:clientCode
        });
        return res.status(200).json({
          statusCode: 200,
          status:"SUCCESS",
          message: "Successfull created",
          data: client,
        });
      } catch (error) {
        return res.status(500).json({
          statusCode: 500,
          status:"FAILED",
          message: error.message,
        });
      }
    }

    static async getClients(req,res){
        try {
    
            const AllClient = await Client.find().sort({name:1});
         //  const data={AllClient,}
            if (AllClient) {
             return  res.status(200).json({
                statusCode: 200,
                status:"SUCCESS",
                data: AllClient,
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
    static async updateLinkedContact(req,res){
      const {clientCode,email}=req.body
      try {
        const checkClient=await Client.findOne({clientCode:clientCode});
        const checkEmail=await Contact.findOne({email:email});
       if(checkClient){
        if(checkEmail){
          const checkLinkedEmail=await Client.findOne({linkedContacts:checkEmail.email,clientCode:checkClient.clientCode});
          if(checkLinkedEmail && checkClient.clientCode===clientCode ){
            return res.status(200).json({
              statusCode: 400,
              message: "The Client below is already linked to this contact",
            }); 
          }else{
            await Client.updateOne({"clientCode":clientCode},{$push: {linkedContacts: email}});
            await Contact.updateOne({"email":email},{$push: {linkedClients: clientCode}});
            return  res.status(200).json({
              statusCode: 200,
              status:"SUCCESS",
              message: "Successful linked",
            }); 
          }
        }else{
          return res.status(200).json({
            statusCode: 404,
            message: "Email Not Found",
          });
        }
       }
       else{
        return res.status(200).json({
          statusCode: 404,
          message: "Client Code Not Found",
        });
       }
        
    } catch (error) {
      return res.status(200).json({ statusCode: 500,status:"FAILED", message: "Server error, Please try again later." });
        
    }
    }

}
module.exports =clientController