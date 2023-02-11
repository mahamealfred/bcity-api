const express = require("express");
const clientController=require("../controllers/clientController");
const router=express.Router()
router.post('/',clientController.createClient)
router.get('/',clientController.getClients)
router.post('/link-contact-toclient',clientController.updateLinkedContact);
module.exports =router